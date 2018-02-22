#!/usr/bin/env node

"use strict";
//git log --no-merges --pretty=short --stat --since 2017/09/14 --until 2018/01/01
//https://regex101.com/r/HjC7th/1
//https://www.npmjs.com/package/console-progress
//https://www.npmjs.com/package/msee
//https://www.npmjs.com/package/json2md
//https://stackoverflow.com/questions/11509830/how-to-add-color-to-githubs-readme-md-file - colors

let fs = require('fs');

require.extensions['.ejs'] = (module, filename) => { module.exports = fs.readFileSync(filename, 'utf8'); };

(async function () {
    const config = require('./env');
    const git = require('git-cmd');
    const _ = require('lodash');
    const util = require('util');
    const openFileStream = util.promisify(fs.open);
    const writeFile = util.promisify(fs.writeFile);
    const Table = require('cli-table');
    const moment = require('moment');require('twix');
    let allDaysInPeriode=[];

    let table = new Table({
        head: ["Author", "Commits ", "Insertions", "Deletions", "% of changes"],

    });
    if (config.init) {
        let configPath = `${process.cwd()}/gimme.config.js`;
        const checkExistence = util.promisify(fs.access);
        try {
            await checkExistence(configPath);
            console.log('Fail: gimme.config.js already exists.');
        } catch (err) {
            fs.createReadStream(`${__dirname}/default-config.js`).pipe(fs.createWriteStream(configPath));
            console.log(`Config file created at ${process.cwd()}/gimme.config.js`);
        }
        return;
    }

    let repositories = config.cwd;

    function getStat(rep, since, until) {
        let cmd = git([
            'log',
            '--no-merges',
            '--pretty=medium',
            '--stat'
        ],
            { cwd: rep }
        );

        if (since) {
            cmd.push(`--since=${since}`);
        }
        if (until) {
            cmd.push(`--until=${until}`);
        }

        return cmd.oneline({ encoding: 'string' });
    }

    let resultText = '';
    for (let rep of repositories) {
        resultText += await getStat(rep, config.since, config.until);
    }

    let commits = resultText.split(/^commit .{40,40}$/mi);

    let resultStat = {
        changed: 0,
        authors: {},
        daily: {}
    };


    for (let commit of commits) {
        if (!commit) {
            continue;
        }

        var author = (/Author: (.+)( $| <)/mi).exec(commit)[1];
        author = config.userAliases[author] || author;


        if (config.ignoreUsers.some(user => user === author)) {
            continue;
        }

        if (!resultStat.authors[author]) {
            resultStat.authors[author] = {
                name: author,
                commits: 0,
                changed: 0,
                insertions: 0,
                deletions: 0,
                byExt: {
                    other: {
                        name: 'other',
                        changed: 0,
                        percent: 0,
                        extensions: []
                    }
                }
            };
            for (let ext of config.statExtensions) {
                resultStat.authors[author].byExt[ext] = {
                    name: ext,
                    changed: 0,
                    percent: 0,
                    extensions: []
                };
            }


        }

        resultStat.authors[author].commits += 1;

        let fileChangesRegExp = new RegExp(`^(.+?)(\\.(${config.statExtensions.join('|')}))* +\\| +(\\d+) ((\\+|-)+)`, 'gmi');
        let info;
        while (info = fileChangesRegExp.exec(commit)) {
            let fileName = info[0];
            if (config.statIgnore.some(regExp => regExp.test(fileName))) {
                continue;
            }
            let changed = (info[5] || '').length,
                changesArr = Array.from(info[5]),
                insertions = changesArr.filter(x => x === '+').length,
                fileExt = (info[3] || 'other').toLowerCase(),
                deletions = changed - insertions;

            if (fileExt === 'other') {
                let data = /(\.(\w{2,5}))* +\| +(\d+) ((\+|-)+)/.exec(info[0]);

                resultStat.authors[author].byExt[fileExt].extensions.push(data[2]);
            }
            resultStat.changed += changed;
            resultStat.authors[author].changed += changed;
            resultStat.authors[author].insertions += insertions;
            resultStat.authors[author].deletions += deletions;
            resultStat.authors[author].byExt[fileExt].changed += changed;
        }

        if (config.daily) {



            var day = (/Date:(.+)/mi).exec(commit)[1];
            day = (new Date(Date.parse(day))).toDateString();

            if (!resultStat.daily[day]) {
                resultStat.daily[day] = {
                    date: day,
                    commits: 0,
                    changed: 0,
                    insertions: 0,
                    deletions: 0,
                };
            }
            resultStat.daily[day].commits += 1;

            let info;
            while (info = fileChangesRegExp.exec(commit)) {
                let fileName = info[0];
                if (config.statIgnore.some(regExp => regExp.test(fileName))) {
                    continue;
                }
                let changed = (info[5] || '').length,
                    changesArr = Array.from(info[5]),
                    insertions = changesArr.filter(x => x === '+').length,
                    deletions = changed - insertions;
                resultStat.daily[day].changed += changed;
                resultStat.daily[day].insertions += insertions;
                resultStat.daily[day].deletions += deletions;
            }
        }
    }
    resultStat.authors = _(resultStat.authors).map(author => {
        author.percent = author.changed / resultStat.changed;
        author.graphPercent = _.ceil(author.percent * 100, 0);
        author.graphLine = Array.from({ length: config.barSize }).map((x, index) => (index + 1) <= (author.graphPercent / 100 * config.barSize) ? '=' : ' ').join('');
        if (config.table) {
            table.push(
                [author.name, author.commits, author.insertions, author.deletions, _.ceil(author.percent * 100, 2).toFixed(2)]
            );
        }

        author.byExt = _(author.byExt).map(ext => {
            ext.percent = ext.changed / author.changed;
            ext.graphPercent = _.ceil(ext.percent * 100, 0);
            ext.graphLine = Array.from({ length: config.barSize }).map((x, index) => (index + 1) <= (ext.graphPercent / 100 * config.barSize) ? '=' : ' ').join('');
            ext.extensions = _.uniq(ext.extensions).filter(x => x);

            return ext;
        }).filter(x => x.changed).orderBy('changed', 'desc').value();

        return author;
    }).orderBy('changed', 'desc').value();


    if (config.daily) {
        let maxChanged = _(resultStat.daily).toArray().maxBy('changed');

        resultStat.daily = _(resultStat.daily).map(day => {
            day.percent = day.changed / maxChanged.changed;
            day.graphPercent = _.ceil((day.percent * 100), 0);
            day.graphLine = Array.from({ length: config.barSize }).map((x, index) => (index + 1) <= (day.graphPercent / 100 * config.barSize) ? '=' : ' ').join('');
            switch (day.commits.toString().length) {
                case 1:
                    day.commits += '  ';
                    break;
                case 2:
                    day.commits += ' ';
                    break;
                default:
                    break;
            }
            return day;
        }).value();

    }
    if (config.table) {
        table.sort((a, b) => b[4] - a[4]); //table sorting desc
    }
    if(config.daily){
        let lastDay = resultStat.daily[0].date;
        let firstDay = resultStat.daily[resultStat.daily.length-1].date;

        firstDay = Date.parse(firstDay);
        lastDay = Date.parse(lastDay);

        var itr = moment.twix(new Date(firstDay),new Date(lastDay)).iterate("days");
        while(itr.hasNext()){
            let progressBar ='';
            while (progressBar.length<config.barSize){
                progressBar+=' ';
            }
            let obj = {date:itr.next().toDate().toDateString(),commits:"0  ",changed:0,insertions:0,deletions:0,graphLine:progressBar,graphPercent:0,percent:0};
            allDaysInPeriode.push(obj)
        }
        allDaysInPeriode.forEach((emptyDay, index) => {
            resultStat.daily.forEach(day =>{
                if(day.date == emptyDay.date ){
                    allDaysInPeriode[index] = day;
                }
            })
        });
        if(allDaysInPeriode.length>90 || !config.ignorLimit){
            let buff = [];
            for(let i=0;i<90;i++){
                buff.unshift(allDaysInPeriode[allDaysInPeriode.length - 1 - i])
            }
            resultStat.daily = buff;
        }
        else{
        resultStat.daily = allDaysInPeriode;
        }
    }

    let text = require('./template.cmd.ejs');
    function getSpaces(length) {
        let space = '';
        while (space.length < length) {
            space += ' ';
        }
        space += 'commits|changes';
        return space;
    }
    let compiled = _.template(text, {
        'imports': {
            '_': _,
            authors: resultStat.authors,
            daily: config.daily ? resultStat.daily : '',
            repositories: repositories,
            config: config,
            table: config.table ? table.toString() : '',
            header: config.daily ? getSpaces((config.barSize + config.lmargin - 4)) : '',
            minSize: (text) => {
                while (text.length < config.lmargin) {
                    text += ' ';
                }
                return text;
            }
        }
    });

    let consoleText = compiled(resultStat)
        .replace(/(\r*\n){2,}(.+)/gm, '\r\n$2')
        .replace(/\$br/gm, '');

    console.log(consoleText);

    let mdFilePath = _.isString(config.appendToMd) ? config.appendToMd : 'Readme.md';

    let mdTemplate = require('./template.md.ejs');
    let compiledmb = _.template(mdTemplate, {
        'imports': {
            '_': _,
            authors: resultStat.authors,
            daily: resultStat.daily,
            repositories: repositories,
            config: config,
            table: table.toString(),
            header: config.daily ? getSpaces((config.barSize + config.lmargin - 4)) : '',
            minSize: (text) => {
                while (text.length < config.lmargin) {
                    text += ' ';
                }
                return text;
            }
        }
    });


    if (config.appendToMd) {
        let file = await openFileStream(mdFilePath, 'w');
        await writeFile(file, compiledmb(table).replace(/^\s*\n/gm, ''));
        console.log(`\r\n\r\n >>>>>>>>>>> Saved to ${mdFilePath} <<<<<<<<<<<<<<`)
    }


})().catch(err => console.error(err.stack))



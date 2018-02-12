#!/usr/bin/env node

"use strict";
//git log --no-merges --pretty=short --stat --since 2017/09/14 --until 2018/01/01
//https://regex101.com/r/HjC7th/1
//https://www.npmjs.com/package/console-progress
//https://www.npmjs.com/package/msee
//https://www.npmjs.com/package/json2md
//https://stackoverflow.com/questions/11509830/how-to-add-color-to-githubs-readme-md-file - colors

let fs = require('fs');

require.extensions['.ejs'] = (module, filename) => {module.exports = fs.readFileSync(filename, 'utf8');};

(async function () {
    const config = require('./env');
    const git = require('git-cmd');
    const _ = require('lodash');
    const Table = require('cli-table');
    var tableLong = new Table({head: ['Person', 'Language','Percent']
        , colWidths: [50, 100, 50]})

    const ignoreList = [
        'node_modules',
        'package.lock',
        'package.json'
    ];

    let repositories = config.cwd.split(',');

    function getStat(rep, since, until) {
        let cmd = git([
                'log',
                '--no-merges',
                '--pretty=short',
                '--stat'
            ],
            {cwd: rep}
        );

        if (since) {
            cmd.push(`--since=${since}`);
        }
        if (until) {
            cmd.push(`--until=${until}`);
        }

        return cmd.oneline({encoding: 'string'});
    }

    let resultText = '';
    for (let rep of repositories) {
        resultText += await getStat(rep, config.since, config.until);
    }


    let commits = resultText.split(/^commit .{40,40}$/mi);

    let resultStat = {
        changed: 0,
        authors: {}
    };


    for (let commit of commits) {
        if (!commit) {
            continue;
        }
        let author = (/Author: (.+)( $| <)/mi).exec(commit)[1];
        author = config.userAliases[author] || author;

        if (config.ignoreUsers.some(user => user === author)) {
            continue;
        }

        if (!resultStat.authors[author]) {
            resultStat.authors[author] = {
                name      : author,
                commits   : 0,
                changed   : 0,
                insertions: 0,
                deletions : 0,
                byExt     : {
                    other: {
                        name      : 'other',
                        changed   : 0,
                        percent   : 0,
                        extensions: []
                    }
                }
            };
            for (let ext of config.statExtensions) {
                resultStat.authors[author].byExt[ext] = {
                    name      : ext,
                    changed   : 0,
                    percent   : 0,
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
            let fileExt    = (info[3] || 'other').toLowerCase(),
                changed    = (info[5] || '').length,
                changesArr = Array.from(info[5]),
                insertions = changesArr.filter(x => x === '+').length,
                deletions  = changed - insertions;

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
    }

    resultStat.authors = _(resultStat.authors).map(author => {
        author.percent = author.changed / resultStat.changed;
        author.graphPercent = _.ceil(author.percent * config.barSize, 0);
        author.graphLine = Array.from({length: config.barSize}).map((x, index) => (index + 1) <= author.graphPercent ? '=' : ' ').join('');
            tableLong.push(
                [author.name, 'total', Math.ceil(author.percent*100)+'%']
            );


        if (config.short) {
            author.byExt = [];
            return author;
        }
        author.byExt = _(author.byExt).map(ext => {
            ext.percent = ext.changed / author.changed;
            ext.graphPercent = _.ceil(ext.percent * config.barSize, 0);
            ext.graphLine = Array.from({length: config.barSize}).map((x, index) => (index + 1) <= ext.graphPercent ? '=' : ' ').join('');
            ext.extensions = _.uniq(ext.extensions).filter(x => x);
            if(ext.percent>0&&ext.name){
            tableLong.push(['',ext.name,Math.ceil(ext.percent*100)+'% from personal results']);
            }
            return ext;
        }).filter(x => x.changed).orderBy('changed', 'desc').value();

        return author;
    }).orderBy('changed', 'desc').value();

    let text = require('./template.ejs');
    let compiled = _.template(text, {
        'imports': {
            '_'         : _,
            repositories: repositories,
            config      : config,
            minSize     : (text) => {
                while (text.length < config.lmargin) {
                    text += ' ';
                }
                return text;
            }
        }
    });
    let consoleText = compiled(resultStat).replace(/^\s*\n/gm, '');

    if(!config.table) {
        console.log(consoleText);
    }
    else {
        console.log(tableLong.toString());
    }


})().catch(err => console.error(err.stack))



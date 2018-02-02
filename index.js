//git log --no-merges --pretty=short --stat --since 2017/09/14 --until 2018/01/01
//https://regex101.com/r/HjC7th/1
//https://www.npmjs.com/package/console-progress
//https://www.npmjs.com/package/msee
//https://www.npmjs.com/package/json2md
//https://stackoverflow.com/questions/11509830/how-to-add-color-to-githubs-readme-md-file - colors
const git = require('git-cmd');
const ignoreList = [
    'node_modules',
    'package.lock',
    'package.json'
]

function getStat(since, until) {
    let cmd = git([
        'log',
        '--no-merges',
        '--pretty=short',
        '--stat'
    ]);

    if(since){
        cmd.push(...[
            `--since=${since}`,

        ]);
    }
    if(until){
        cmd.push(...[
            '--until',
            until
        ]);
    }

    return cmd.oneline({encoding: 'string'});
}

getStat('2017/09/14').then(x=>{
    debugger
});

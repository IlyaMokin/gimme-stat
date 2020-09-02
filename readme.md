# gimme-stat

The tool for **GIT** repositories to generate a simple progress statistic by changed lines.

```sh
$ npm -g install gimme-stat
$ cd /home/your_git_project_name
$ gimme-stat
```

# Available arguments

 - `--init`  - create default configuration file `gimme.config.js`. The config can be alternative for console arguments.
 - `--since=[date]` `--until=[date]` you can use any `git log` valid formats for the options, as a rule in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   - examplse of use:
     - --since="2014-02-12T16:36:00-07:00"
   - Note: you can also use:
     - --since="2.years"
     - --since="3.months"
     - --since="2014-02-12T16:36:00-07:00"
     - --since="1 month ago"
     - --since="2 weeks 3 days 2 hours 30 minutes 59 seconds ago"
 - `--graph[ all | short | detailed | none ]` - take one of specified flags, to set detail level of statistic information it showed at Examples,
 using `all` return both `short` and `detailed`. `none` will hide per user statistics, use it if only `table` or `daily` needed.
 - `--cwd` you can use the argument to specify repository path in your local system if you run the commnad not from the repository or you want to specify a few repositories.
   - single rep example: `--cwd="/home/project"`
   - You can use a few rep split by comma:
     - `--cwd="/home/project1,/home/project2,/home/project3"`
 - `--prepull` - pull commits for all repositories before analyse.
    - Note: doesn't resolve merge conflicts.
 - `--users="Me,ThatGuy"` - take array of names, and return statistic  only for them .
 - `--lmargin=19` - the space between progress line and a left edge of the window
 - `--barSize=200` - set length of progress bar in chars, default value set at 100 chars
 - `--table` - generate table with shot personal commit statistic
 - `--daily` - generate per day statistic based on number of changed lines.
 - `--appendtomd=report.md`  - will create `report.md` file with statistic in your project  directory
 - `--bartype = [default | detailed]` - change progress bar representation, `detailed`  show insertions/deletions, `default` dosen't. 

# Examples
```sh
$ gimme-stat --since=3.months --cwd="/home/project" --graph=detailed

SomeMan1            ███████████████░░░░░░░░░░░░░░░░░░░░░░░░░ 38.34%
├── cs              ███████████████████░░░░░░░░░░░░░░░░░░░░░ 47.51%
├── other           ██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 26.64%
├── js              ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 16.88%
├── scss            ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 6.41%
├── sql             ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.46%
└── json            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.10%
SomeMan2            ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 35.91%
├── cs              ███████████████████████░░░░░░░░░░░░░░░░░ 57.25%
├── other           ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 36.08%
├── js              ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 5.18%
├── scss            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.64%
├── json            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.50%
├── html            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.18%
└── sql             ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.18%
SomeMan3            █████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 22.84%
├── cs              ██████████████████████░░░░░░░░░░░░░░░░░░ 54.38%
├── other           ██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 25.49%
├── js              ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 15.45%
├── sql             █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 2.40%
├── json            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.73%
├── scss            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.45%
└── html            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.11%
Ilya Mokin          █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 2.90%
├── cs              █████████████████████████████████████░░░ 92.11%
├── other           ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 6.14%
└── js              ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.75%

```

```sh
$ gimme-stat  --graph=short --bartype=detailed --barsize=40 

    Legend:
    + - insertions
    - - deletions

SomeMan1       [-----------------+++++++++++            ] 71.26%
SomeMan2       [-------++++                             ] 28.74%
```

```sh
$ gimme-stat --since=1.weeks --graph=short --barsize=50 --daily

SomeMan1       ███████████████░░░░░░░░░░░░░░░░░░░░░░░░░ 38.34%
SomeMan2       ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 35.91%
SomeMan3       █████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 22.84%
Ilya Mokin     █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 2.90%

                                                      commits|changes
Thu Nov 23 2017 ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 4   | 119
Fri Nov 24 2017 ████████████████░░░░░░░░░░░░░░░░░░░░░░░░ 7   | 290
Sat Nov 25 2017 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0   | 0
Sun Nov 26 2017 ██████████████████░░░░░░░░░░░░░░░░░░░░░░ 6   | 330
Mon Nov 27 2017 ████████████████████████████░░░░░░░░░░░░ 8   | 517
Tue Nov 28 2017 ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 5   | 265
Wed Nov 29 2017 ████████████████████████████████████████ 20  | 741
```

```sh
$ gimme-stat --since=1.weeks --daily --users="Dat Ding" --graph=none
                                                      commits|changes
Thu Nov 23 2017 ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 4   | 119
Fri Nov 24 2017 ████████████████░░░░░░░░░░░░░░░░░░░░░░░░ 7   | 290
Sat Nov 25 2017 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0   | 0
Sun Nov 26 2017 ██████████████████░░░░░░░░░░░░░░░░░░░░░░ 6   | 330
Mon Nov 27 2017 ████████████████████████████░░░░░░░░░░░░ 8   | 517
Tue Nov 28 2017 ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 5   | 265
Wed Nov 29 2017 ████████████████████████████████████████ 20  | 741
```

```sh
$ gimme-stat --since=3.months --graph=none --table 
┌──────────────┬─────────┬────────────┬───────────┬──────────────┐
│ Author       │ Commits │ Insertions │ Deletions │ % of changes │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan      │ 69      │ 2237       │ 1110      │ 36           │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan1     │ 92      │ 2335       │ 905       │ 35           │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan2     │ 42      │ 1389       │ 801       │ 24           │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan3     │ 5       │ 209        │ 127       │ 4            │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ Ilya Mokin   │ 4       │ 193        │ 35        │ 3            │
└──────────────┴─────────┴────────────┴───────────┴──────────────┘
```

# Sample  `gimme.config.js`
You can place the config in a directory which you are using for generate `gimme-stat` reports.

```js
module.exports = {
    userAliases   : [
        'ilyamokin>Ilya Mokin',
        'imokin>Ilya Mokin'
    ],
    appendToMd    : "report.md",
    since         : "1.weeks",
    until         : "",
    graph         : "short",
    lmargin       : 19,
    barSize       : 100,
    cwd           : [
        "C:/repository/MyProject1",
        "C:/repository/MyProject2"
    ],
    users         :'',
    barType       :'default',
    //Masks of files which will ignored in your statistic
    statIgnore    : [
        /node_modules/mi,
        /package\-lock\.json/mi,
        /yarn\.lock/mi,
        /assets/mi,
        /dist/mi,
        /\.gitignore/,
        /www(\/|\\)build/mi,
        /^(\/|\\)www/mi,
        /\.idea/,
        /config\.xml/,
        /\.sourcemaps/,
        /.+\.map/
    ],


    table: false,
    daily: false,
    prepull: false,
    // The file extensions will be shown in your statistic,
    // other will be under 'other' category.
    statExtensions: [
        'js', 'html', 'htm', 'cs', 'css', 'scss', 'less',
        'json', 'php', 'sql'
    ],

    //The users will be ignored for your statistic
    ignoreUsers : [
        'Unknown', 'user1'
    ]
}
```
# Sample  `report.md`

Chart generated by gimme-stat at Fri Feb 16 2018 12:43:46
```sh
Repositories:
home/rep/project1
home/rep/project2
```
## Short
```sh
SomeMan1       ███████████████░░░░░░░░░░░░░░░░░░░░░░░░░ 38.34%
SomeMan2       ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 35.91%
SomeMan3       █████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 22.84%
Ilya Mokin     █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 2.90%
```
## Detailed
```sh
SomeMan1            ███████████████░░░░░░░░░░░░░░░░░░░░░░░░░ 38.34%
├── cs              ███████████████████░░░░░░░░░░░░░░░░░░░░░ 47.51%
├── other           ██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 26.64%
├── js              ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 16.88%
├── scss            ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 6.41%
├── sql             ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.46%
└── json            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.10%
SomeMan2            ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 35.91%
├── cs              ███████████████████████░░░░░░░░░░░░░░░░░ 57.25%
├── other           ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 36.08%
├── js              ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 5.18%
├── scss            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.64%
├── json            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.50%
├── html            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.18%
└── sql             ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.18%
SomeMan3            █████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 22.84%
├── cs              ██████████████████████░░░░░░░░░░░░░░░░░░ 54.38%
├── other           ██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 25.49%
├── js              ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 15.45%
├── sql             █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 2.40%
├── json            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.73%
├── scss            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.45%
└── html            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.11%
Ilya Mokin          █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 2.90%
├── cs              █████████████████████████████████████░░░ 92.11%
├── other           ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 6.14%
└── js              ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.75%
```

```sh
┌──────────────┬─────────┬────────────┬───────────┬──────────────┐
│ Author       │ Commits │ Insertions │ Deletions │ % of changes │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan      │ 69      │ 2237       │ 1110      │ 36           │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan1     │ 92      │ 2335       │ 905       │ 35           │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan2     │ 42      │ 1389       │ 801       │ 24           │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan3     │ 5       │ 209        │ 127       │ 4            │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ Ilya Mokin   │ 4       │ 193        │ 35        │ 3            │
└──────────────┴─────────┴────────────┴───────────┴──────────────┘
```
## Daily
```sh
                                                      commits|changes
Thu Nov 23 2017 ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 4   | 119
Fri Nov 24 2017 ████████████████░░░░░░░░░░░░░░░░░░░░░░░░ 7   | 290
Sat Nov 25 2017 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0   | 0
Sun Nov 26 2017 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0   | 0
Mon Nov 27 2017 ██████████████████░░░░░░░░░░░░░░░░░░░░░░ 6   | 330
Tue Nov 28 2017 ████████████████████████████░░░░░░░░░░░░ 8   | 517
Wed Nov 29 2017 ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 5   | 265
Thu Nov 30 2017 ████████████████████████████████████████ 20  | 741
``` 
# Usage as nodejs module
Easiest way to use it is to call module with default parameters, use empty object for this.
``` js
let gimmeStat = require('gimme-stat');
gimmeStat.text({}).then((answer) => {
    console.log(answer);
    });
```
Availble 3 type of return:
 - `gimmeStat.text({})` - `{json, string}` - json will contain raw data and second field will be in requested format
 - `gimmeStat.md({})` - `{json, md}`
 - `gimmeStat.json({})` - `{json}`

Also you can choose parameters, send it as object
``` js
let gimmeStat = require('gimme-stat');
gimmeStat.text({
    appendToMd:false,
    barSize:60,
    barType:"default",
    cwd:Array(1) ["."],
    daily:false,
    graph:"short",
    ignoreUsers:Array(2) ["Unknown", "user1"],
    init:false,
    prepull:false,
    since:"3.months",
    table:false,
    until:"",
    userAliases:Object {ilyamokin: "Ilya Mokin", imokin: "Ilya Mokin"},
    users:Array(1) [""]
}).then((answer) => {console.log(answer);});
```
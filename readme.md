# gimme-stat

The toll for **GIT** repositories to generate a simple progress statistic by changed lines.

```
$ npm -g install gimme-stat
$ cd /home/your_git_project_name
$ gimme-stat
```

# Available arguments
 - `--init`  - create `gimme.config.js` at current directory, in this file you can configure default value for every flag for  next call
 - `--since=[date]` `--until=[date]` you can use any `git log` valid formats for the options, as a rule in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   - examplse of use:
     - --since="2014-02-12T16:36:00-07:00"
   - Note: you can also use:
     - --since="2.years"
     - --since="3.months"
     - --since="2014-02-12T16:36:00-07:00"
     - --since="1 month ago"
     - --since="2 weeks 3 days 2 hours 30 minutes 59 seconds ago"
 - `--graph[ all | short | detailed ]` - take one of specified flags, to set detail level of statistic information it showed at Examples,
 using `all` return both `short` and `detailed`.
 - `--cwd` you can use the argument to specify repository path in your local system if you run the commnad not from the repository or you want to specify a few repositories.
   - single rep example: `--cwd="/home/project"`
   - You can use a few rep split by comma:
     - `--cwd="/home/project1,/home/project2,/home/project3"`
 - `--lmargin=19` - the space between progress line and a left edge of the window
 - `--barSize=200` - set length of progress bar in chars, default value set at 100 chars
 - `--table` - generate table with shot personal commit statistic 
    - Note: can be used with `--appendtomd` flag, this will add table to you statistic file
 - `--appendtomd=codersStatistics`  - will create `codersStatistics.md` file with statistic in your project  directory
    - Note: you can set default name for report file at `gimme.config.js`  but in this case 
    result file will be create or update every time you use `gimme-stat`.

# Examples
```
$ gimme-stat --since=3.months --cwd="/home/project" --barsize=50 --graph=detailed


SomeMan1            [=======================================           ] 19.18%

├── cs              [=========================                         ] 24.83% 
├── other           [=============                                     ] 12.98% 
├── js              [========                                          ] 7.84% 
├── scss            [===                                               ] 2.98% 
├── json            [=                                                 ] 0.69% 
└── sql             [=                                                 ] 0.68% 


SomeMan2            [===================================               ] 17.49%

├── cs              [============================                      ] 27.31% 
├── other           [==================                                ] 17.21% 
├── js              [=====                                             ] 4.04% 
├── json            [=                                                 ] 0.47% 
├── html            [=                                                 ] 0.34% 
├── scss            [=                                                 ] 0.30% 
├── css             [=                                                 ] 0.24% 
└── sql             [=                                                 ] 0.08% 


SomeMan3            [========================                          ] 11.98%

├── cs              [========================                          ] 23.65% 
├── other           [===============                                   ] 14.66% 
├── js              [=========                                         ] 8.77% 
├── sql             [==                                                ] 1.06% 
├── json            [=                                                 ] 0.91% 
├── scss            [=                                                 ] 0.77% 
└── html            [=                                                 ] 0.17% 

Ilya Mokin          [===                                               ] 1.35%

├── cs              [===============================================   ] 46.05% 
├── other           [====                                              ] 3.07% 
└── js              [=                                                 ] 0.88% 
                                                                                  
```

```
$ gimme-stat --since=3.months --graph=short --barsize=50

SomeMan1       [=======================================           ] 19.18%
SomeMan1       [===================================               ] 17.49%
SomeMan1       [========================                          ] 11.98%
Ilya Mokin     [===                                               ] 1.35%
```
```
$ gimme-stat --since=3.months --table
┌─────────────────┬──────────┬────────────┬───────────┬──────────────┐
│ Author          │ Commits  │ insertions │ deletions │ % of changes │
├─────────────────┼──────────┼────────────┼───────────┼──────────────┤
│ Dat Ding        │ 61       │ 1920       │ 1035      │ 35%          │
├─────────────────┼──────────┼────────────┼───────────┼──────────────┤
│ Ilya Mokin      │ 92       │ 2335       │ 905       │ 38%          │
├─────────────────┼──────────┼────────────┼───────────┼──────────────┤
│ Some Man1       │ 42       │ 1384       │ 639       │ 24%          │
├─────────────────┼──────────┼────────────┼───────────┼──────────────┤
│ Some Man3       │ 4        │ 193        │ 35        │ 3%           │
└─────────────────┴──────────┴────────────┴───────────┴──────────────┘
```

# Sample  `gimme.config.js`
You can place the config in a directory which you are using for generate `gimme-stat` reports.

```
module.exports = {
    userAliases   : 'ilyamokin>Ilya Mokin,imokin>Ilya Mokin',
    since         : "",
    until         : "",
    lmargin       : 19,
    barSize       : 100,
    cwd           : "/home/rep1,/home/rep2,/home/rep3",
    graph         : "short",
    appendToMd    : "",
    statIgnore    : [
        //Masks of files which will ignored in your statistic

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
    init: false,

    // The file extensions will be shown in your statistic,
    // other will be under 'other' category.
    statExtensions: [
        'js', 'html', 'htm', 'cs', 'css', 'scss', 'less', 
        'json', 'php', 'sql','cs'
    ],

    //The users will be ignored for your statistic
    ignoreUsers : [
        'Unknown', 'user1'
    ]
}
```
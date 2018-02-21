# gimme-stat

The toll for **GIT** repositories to generate a simple progress statistic by changed lines.

```sh
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
 - `--daily` - generate per day statistic based on number of changed lines.
    - Note:Progress bar length calculations based on day with greatest number of changed lines. This day result takes as 100%.
 - `--appendtomd=codersStatistics`  - will create `codersStatistics.md` file with statistic in your project  directory
    - Note: you can set default name for report file at `gimme.config.js`  but in this case 
    result file will be create or update every time you use `gimme-stat`.

# Examples
```sh
$ gimme-stat --since=3.months --cwd="/home/project" --graph=detailed

SomeMan1  [===================                             ] 38.36%
├── cs    [=========================                       ] 49.66% 
├── other [=============                                   ] 25.96% 
├── js    [========                                        ] 15.68% 
├── scss  [===                                             ] 5.96% 
├── json  [=                                               ] 1.39% 
└── sql   [=                                               ] 1.36% 

SomeMan2  [=================                               ] 34.99%
├── cs    [===========================                     ] 54.62% 
├── other [=================                               ] 34.42% 
├── js    [====                                            ] 8.09% 
├── json  [                                                ] 0.95% 
├── html  [                                                ] 0.68% 
├── scss  [                                                ] 0.61% 
├── css   [                                                ] 0.47% 
└── sql   [                                                ] 0.17% 

SomeMan3  [============                                    ] 23.95%
├── cs    [========================                        ] 47.31% 
├── other [===============                                 ] 29.31% 
├── js    [=========                                       ] 17.55% 
├── sql   [=                                               ] 2.13% 
├── json  [=                                               ] 1.83% 
├── scss  [=                                               ] 1.53% 
└── html  [                                                ] 0.35% 

Ilya Mokin[=                                               ] 2.70%
├── cs    [=============================================   ] 92.11% 
├── other [===                                             ] 6.14% 
└── js    [=                                               ] 1.75% 
 
```

```sh
$ gimme-stat --since=3.months --graph=short --barsize=50 --daily

SomeMan1       [================                          ] 35.83%
SomeMan2       [===============                           ] 34.69%
SomeMan3       [==========                                ] 23.45%
Ilya Mokin     [=                                         ] 6.04%

                                                       commits|changes
Thu Jan 25 2018 [=======                                 ] 2  | 137
Tue Jan 23 2018 [====                                    ] 1  | 69
Mon Jan 22 2018 [===                                     ] 2  | 60
Sat Jan 20 2018 [========                                ] 3  | 159
Fri Jan 19 2018 [======                                  ] 2  | 119
Thu Jan 18 2018 [========                                ] 3  | 142
Wed Jan 17 2018 [========                                ] 2  | 150
Tue Jan 16 2018 [===                                     ] 1  | 63
Mon Jan 15 2018 [=                                       ] 1  | 24
Fri Jan 12 2018 [====                                    ] 3  | 88
Thu Jan 11 2018 [==                                      ] 1  | 48
Wed Jan 10 2018 [===                                     ] 2  | 62
Tue Jan 09 2018 [=========                               ] 4  | 164
Mon Jan 08 2018 [============================            ] 10 | 531
Fri Jan 05 2018 [===========================             ] 11 | 504
Thu Jan 04 2018 [================                        ] 7  | 298
Wed Jan 03 2018 [==============                          ] 7  | 255
```
```sh
$ gimme-stat --since=3.months --table
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
    appendToMd    : "some-md-file.md",
    since         : "3.months",
    until         : "",
    graph         : "short",
    lmargin       : 19,
    barSize       : 100,
    cwd           : [
        "C:\\repository\\CatchUp",
        "C:\\repository\\LabelVisor"
    ],

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
# Sample  `codersStatistics.md`

Chart generated by gimme-stat at Fri Feb 16 2018 12:43:46 
```sh
Repositories:
home\rep\porject1
home\rep\porject2             
```
## Short
```sh
SomeMan1       [================                          ] 35.83%
SomeMan2       [===============                           ] 34.69%
SomeMan3       [==========                                ] 23.45%
Ilya Mokin     [=                                         ] 6.04%
```
## Detailed
```sh
SomeMan1  [===================                             ] 38.36%
├── cs    [=========================                       ] 49.66% 
├── other [=============                                   ] 25.96% 
├── js    [========                                        ] 15.68% 
├── scss  [===                                             ] 5.96% 
├── json  [=                                               ] 1.39% 
└── sql   [=                                               ] 1.36% 

SomeMan2  [=================                               ] 34.99%
├── cs    [===========================                     ] 54.62% 
├── other [=================                               ] 34.42% 
├── js    [====                                            ] 8.09% 
├── json  [                                                ] 0.95% 
├── html  [                                                ] 0.68% 
├── scss  [                                                ] 0.61% 
├── css   [                                                ] 0.47% 
└── sql   [                                                ] 0.17% 

SomeMan3  [============                                    ] 23.95%
├── cs    [========================                        ] 47.31% 
├── other [===============                                 ] 29.31% 
├── js    [=========                                       ] 17.55% 
├── sql   [=                                               ] 2.13% 
├── json  [=                                               ] 1.83% 
├── scss  [=                                               ] 1.53% 
└── html  [                                                ] 0.35% 

Ilya Mokin[=                                               ] 2.70%
├── cs    [=============================================   ] 92.11% 
├── other [===                                             ] 6.14% 
└── js    [=                                               ] 1.75% 
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
##Daily
```sh
                                                      commits |changes 
Thu Jan 25 2018 [=======                                 ] 2  | 137
Tue Jan 23 2018 [====                                    ] 1  | 69
Mon Jan 22 2018 [===                                     ] 2  | 60
Sat Jan 20 2018 [========                                ] 3  | 159
Fri Jan 19 2018 [======                                  ] 2  | 119
Thu Jan 18 2018 [========                                ] 3  | 142
Wed Jan 17 2018 [========                                ] 2  | 150
Tue Jan 16 2018 [===                                     ] 1  | 63
Mon Jan 15 2018 [=                                       ] 1  | 24
Fri Jan 12 2018 [====                                    ] 3  | 88
Thu Jan 11 2018 [==                                      ] 1  | 48
Wed Jan 10 2018 [===                                     ] 2  | 62
Tue Jan 09 2018 [=========                               ] 4  | 164
Mon Jan 08 2018 [============================            ] 10 | 531
Fri Jan 05 2018 [===========================             ] 11 | 504
Thu Jan 04 2018 [================                        ] 7  | 298
Wed Jan 03 2018 [==============                          ] 7  | 255
``` 
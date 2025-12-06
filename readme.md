# [gimme-stat](https://gbitcode.github.io/gimme-stat/) is a CLI **GIT report tool**

Having a git repository you can get the report which includes commits count per developer, number of changed lines, their percentage relative with other project developers.

It has flexible customization which allows to combine a list of repositories, merge developers nicknames, exclude some of them from the report. Allow to export the report to MD format or use from nodejs as JSON result.

```sh
$ npm -g install gimme-stat
$ cd /home/your_git_project_name
$ gimme-stat
```

## More examples and DOCUMENTATION by the [link](https://gimme-stat.gbitcode.com).

# Available arguments

 - `--init`  - create default configuration file `gimme.config.js`. The config can be an alternative for console arguments.
 - `--since=[date]` `--until=[date]` you can use any `git log` valid formats for the options, as a rule in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   - examples of use:
     - --since="2014-02-12T16:36:00-07:00"
   - Note: you can also use:
     - --since="2.years"
     - --since="3.months"
     - --since="2014-02-12T16:36:00-07:00"
     - --since="1 month ago"
     - --since="2 weeks 3 days 2 hours 30 minutes 59 seconds ago"
 - `--graph = [ all | short | detailed | none ]` - take one of specified flags, to set detail level of statistic information as shown in the Examples,
 using `all` return both `short` and `detailed`. `none` will hide per user statistics, use it if only `table` or `daily` needed.
 - `--statext = "js,html,htm,cs,css,scss,less,json,php,sql"` - The list of extensions which you want to see in `--graph=detailed` mode.
 - `--cwd` you can use the argument to specify repository path in your local system if you run the command not from the repository or you want to specify a few repositories.
   - single rep example: `--cwd="/home/project"`
   - You can use multiple repos separated by commas:
     - `--cwd="/home/project1,/home/project2,/home/project3"`
 - `--prepull` - pull commits for all repositories before analysis.
    - Note: doesn't resolve merge conflicts.
 - `--users = "Me,ThatGuy"` - takes an array of names and returns statistics only for them.
 - `--lmargin=19` - the space between progress line and a left edge of the window
 - `--barSize=200` - set length of progress bar in chars, default value set at 100 chars
 - `--table` - generate table with short personal commit statistic
 - `--daily` - generate per day statistic based on number of changed lines.
 - `--appendtomd=report.md`  - will create `report.md` file with statistic in your project  directory
 - `--bartype = [default | detailed]` - change progress bar representation, `detailed`  show insertions/deletions, `default` doesn't. 
 - `--ignoreusers="FirstName LastName,FirstName2 LastName2,SomeUsername"` - allows you to exclude specific users from the statistics (Their contribution will be ignored fully).
 - `--statignore="package-lock.json,assets,bin"` - you can put any files which will be ignored. 
   - Items in the list are [RegExp](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp) strings. NOTES: Flags `mi` will be appended for the RegExp.
   - With config file `gimme.config.js` can be configured with more flexibility (see Examples below).
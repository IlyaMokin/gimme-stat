module.exports = {
    userAliases   : 'ilyamokin>Ilya Mokin,imokin>Ilya Mokin',
    ignoreUsers   : ['Unknown'],
    since         : "3.years",
    until         : "",
    lmargin       : 19,
    barSize       : 100,
    cwd           : "/home/rep1,/home/rep2,/home/rep3",
    statIgnore    : [ //Masks of files which will ignored in your statistic
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

    short: false,

    // The file extensions will be shown in your statistic,
    // other will be under 'other' category.
    statExtensions: [
        'js', 'html', 'htm', 'cs', 'css', 'scss', 'less', 'json', 'php', 'sql'
    ],

    //The users will be ignored for your statistic
    ignoreUsers : [
        'Unknown', 'user1'
    ]
}
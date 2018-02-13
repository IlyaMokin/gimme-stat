module.exports = {
    userAliases   : 'maksim.sarvas>Maksim Sarvas,ladamashina>Maksim Sarvas',
    ignoreUsers   : ['Unknown'],
    since         : "3.months",
    until         : "",
    lmargin       : 19,
    barSize       : 100,
    cwd           : "C:\\repository\\CatchUp",
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
    table: false,

    // The file extensions will be shown in your statistic,
    // other will be under 'other' category.
    statExtensions: [
        'js', 'html', 'htm', 'cs', 'css', 'scss', 'less', 'json', 'php', 'sql','cs'
    ],

    //The users will be ignored for your statistic
    ignoreUsers : [
        'Unknown', 'user1'
    ]
}
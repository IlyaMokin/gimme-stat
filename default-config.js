module.exports = {
    userAliases   : [
        'ilyamokin>Ilya Mokin',
        'imokin>Ilya Mokin'
    ],
    appendToMd    : false,
    since         : "3.months",
    until         : "",
    graph         : "short",
    lmargin       : 19,
    barSize       : 60,
    cwd           : [ "." ],
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
        'js', 'html', 'htm', 'cs', 'css', 'scss', 'less', 'json', 'php', 'sql'
    ],

    //The users will be ignored for your statistic
    ignoreUsers : [
        'Unknown', 'user1'
    ]
}
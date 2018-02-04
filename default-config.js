module.exports = {
    userAliases   : 'ilyamokin>Ilya Mokin,imokin>Ilya Mokin',
    ignoreUsers   : ['Unknown'],
    statIgnore    : [
        /node_modules/mi,
        /package\-lock\.json/mi,
        /yarn\.lock/mi,
        /assets/mi,
        /dist/mi,
        /\.gitignore/,
        /www(\/|\\)build/mi,
        /\.idea/,
        /\.sourcemaps/,
        /.+\.map/
    ],
    statExtensions: [
        'js', 'html', 'htm', 'cs', 'css', 'scss', 'less', 'json', 'ts', 'sql', 'xml', 'php', 'vue'
    ]
}
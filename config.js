module.exports = {
    userAliases   : 'ilyamokin=>Ilya Mokin,Sergey Galuza=>Sergey G,alexeyradkovich=>alex',
    ignoreUsers   : ['Unknown', 'cornBuddy', 'Echoes93', 'brandon.cebulak', 'Mario'],
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
    statExtensions: [
        'js', 'html', 'htm', 'cs', 'css', 'scss', 'less', 'json', 'ts', 'sql', 'xml', 'php'
    ]
}
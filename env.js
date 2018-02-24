let convict = require('convict');
let configFile = require('./default-config');

convict.addFormat({
    name    : 'Dictionary',
    validate: function (val) {
        return true;
    },
    coerce  : function (val) {
        return val
    }
});

let config = convict({

    barSize: {
        format : 'int',
        default: 100,
        arg:'barsize'
    },
    daily: {
        format: Boolean,
        default: false,
        arg:'daily'
    },
    ignorLimit:{
        format: Boolean,
        default: false,
        arg:'ignorlimit'
    },
    since         : {
        format : 'String',
        default: '1.months',
        arg    : 'since',
    },
    graph         :{
        format: ["all", "short", "detailed"],
        default: 'short',
        arg    : 'graph',
        env: "GRAPH_FLAG_MISMATCH"
    },
    table         :{
        format : 'Boolean',
        default: false,
        arg    : 'table',
    },
    init          :{
        format : 'Boolean',
        default: false,
        arg    : 'init',
    },
    prepull       :{
        format : 'Boolean',
        default: false,
        arg    : 'prepull',
    },
    lmargin       : {
        format : 'nat',
        default: 12,
        arg    : 'lmargin',
    },
    cwd           : {
        format : 'Array',
        default: '',
        arg    : 'cwd',
    },
    appendToMd : {
        format: '*',
        default: false,
        arg    : 'appendtomd'
    },
    until         : {
        format : 'String',
        default: "",
        arg    : 'until',
    },
    userAliases   : {
        format : "Array",
        default: "",
        arg    : 'useraliases'
    },
    users   : {
        format : "Array",
        default: "",
        arg    : 'users'
    },
    ignoreUsers   : {
        format : Array,
        default: []
    },
    statIgnore    : {
        format : Array,
        default: []
    },
    statExtensions: {
        format : Array,
        default: []
    },


});

config.load(configFile);

let configPath = `${process.cwd()}/gimme.config.js`;
let fs = require('fs');
if (fs.existsSync(configPath)) {
    config.load(require(configPath));
}

config.validate({allowed: 'strict'});

let result = config.getProperties();

let values = result.userAliases;
let obj = {};
for (let keyValue of values) {
    let kv = keyValue.split('>');
    obj[kv[0]] = kv[1];
}
result.userAliases = obj;

module.exports = result;
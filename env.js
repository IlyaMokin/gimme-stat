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
    since         : {
        format : 'String',
        default: '1.months',
        arg    : 'since',
    },
    short         : {
        format : 'Boolean',
        default: false,
        arg    : 'short',
    },
    lmargin       : {
        format : 'nat',
        default: 12,
        arg    : 'lmargin',
    },
    cwd           : {
        format : 'String',
        default: '.',
        arg    : 'cwd',
    },
    until         : {
        format : 'String',
        default: "",
        arg    : 'until',
    },
    userAliases   : {
        format : "Dictionary",
        default: "",
        arg    : 'useraliases'
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

let values = result.userAliases.split(',');
let obj = {};
for (let keyValue of values) {
    let kv = keyValue.split('>');
    obj[kv[0]] = kv[1];
}
result.userAliases = obj;

module.exports = result;
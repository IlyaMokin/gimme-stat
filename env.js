let convict = require('convict');
let configFile = require('./default-config');
let _ = require('lodash');

convict.addFormat({
    name: 'Array[RegExp]',
    validate: function (val) {
        return true;
    },
    coerce: function (val) {
        if(_.isString(val)) {
            let regExArr = _(val)
                .split(',').filter(x => x)
                .map(x => new RegExp(x, 'mi'));
            return regExArr.value();
        } else if (_.isArray(val)){
            return val;
        }

        throw new Error('must be a Araray of RegExps');
    }
});

let config = convict({
    barSize: {
        format: 'int',
        default: 100,
        arg: 'barsize'
    },
    daily: {
        format: Boolean,
        default: false,
        arg: 'daily'
    },
    since: {
        format: 'String',
        default: '1.months',
        arg: 'since',
    },
    graph: {
        format: ["all", "short", "detailed", "none"],
        default: 'short',
        arg: 'graph',
        env: "GRAPH_FLAG_MISMATCH"
    },
    barType: {
        format: ['default','detailed'],
        default :'default',
        arg: 'bartype',
        env: "GRAPH_FLAG_MISMATCH"
    },
    table: {
        format: 'Boolean',
        default: false,
        arg: 'table',
    },
    init: {
        format: 'Boolean',
        default: false,
        arg: 'init',
    },
    prepull: {
        format: 'Boolean',
        default: false,
        arg: 'prepull',
    },
    lmargin: {
        format: 'nat',
        default: 12,
        arg: 'lmargin',
    },
    cwd: {
        format: 'Array',
        default: '',
        arg: 'cwd',
    },
    appendToMd: {
        format: '*',
        default: false,
        arg: 'appendtomd'
    },
    until: {
        format: 'String',
        default: "",
        arg: 'until',
    },
    userAliases: {
        format: "Array",
        default: "",
        arg: 'useraliases'
    },
    users: {
        format: "Array",
        default: "",
        arg: 'users'
    },
    ignoreUsers: {
        format: Array,
        default: [],
        arg: 'ignoreusers'
    },
    statIgnore: {
        format: 'Array[RegExp]',
        default: [],
        arg: 'statignore'
    },
    statExtensions: {
        format: Array,
        default: [],
        arg: 'statext'
    },


});

config.load(configFile);

let configPath = `${process.cwd()}/gimme.config.js`;
let fs = require('fs');
if (fs.existsSync(configPath)) {
    config.load(require(configPath));
}

config.validate({ allowed: 'strict' });

let result = config.getProperties();

let values = result.userAliases;
let obj = {};
for (let keyValue of values) {
    let kv = keyValue.split('>');
    obj[kv[0]] = kv[1];
}
result.userAliases = obj;

module.exports = result;
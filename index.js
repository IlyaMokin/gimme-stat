var gimmeStat = {
    cmd: () => {
        let stat = require('./stat');
        const defaultConfig = require('./env');
        specialParams = {
            output: "cmd"
        }
        stat(defaultConfig,specialParams);
    },
    text: (userConfig) => {
        let stat = require('./stat');
        let defaultConfig = require('./env');
        defaultConfig = Object.assign(defaultConfig, userConfig);
        specialParams = {
            output: "text"
        }
        return stat(defaultConfig,specialParams);
    },
    md: (userConfig) => {
        let stat = require('./stat');
        let defaultConfig = require('./env');
        defaultConfig = Object.assign(defaultConfig, userConfig);
        specialParams = {
            output: "md"
        }
        return stat(defaultConfig,specialParams);
    },
    json: (userConfig) => {
        let stat = require('./stat');
        let defaultConfig = require('./env');
        defaultConfig = Object.assign(defaultConfig, userConfig);
        specialParams = {
            output: "json"
        }
        return stat(defaultConfig,specialParams);
    },
}
if (require.main === module) {
    gimmeStat.cmd();
}
module.exports = gimmeStat;
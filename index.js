#!/usr/bin/env node
"use strict";

var gimmeStat = {
    cmd: () => {
        let stat = require('./stat');
        const defaultConfig = require('./env');
        let specialParams = {
            output: "cmd"
        }
        stat(defaultConfig,specialParams);
    },
    text: (userConfig) => {
        let stat = require('./stat');
        let defaultConfig = require('./env');
        defaultConfig = Object.assign(defaultConfig, userConfig);
        let specialParams = {
            output: "text"
        }
        return stat(defaultConfig,specialParams);
    },
    md: (userConfig) => {
        let stat = require('./stat');
        let defaultConfig = require('./env');
        defaultConfig = Object.assign(defaultConfig, userConfig);
        let specialParams = {
            output: "md"
        }
        return stat(defaultConfig,specialParams);
    },
    json: (userConfig) => {
        let stat = require('./stat');
        let defaultConfig = require('./env');
        defaultConfig = Object.assign(defaultConfig, userConfig);
        let specialParams = {
            output: "json"
        }
        return stat(defaultConfig,specialParams);
    },
}
if (require.main === module) {
    gimmeStat.cmd();
}
module.exports = gimmeStat;
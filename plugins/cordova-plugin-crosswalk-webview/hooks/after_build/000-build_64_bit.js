#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
module.exports = function(context) {

    /** @external */
    var deferral = context.requireCordovaModule('q').defer(),
        UpdateConfig = require('./../update_config.js'),
        updateConfig = new UpdateConfig(context);

    /** Main method */
    var main = function() {
        // Remove the xwalk variables
        updateConfig.afterBuild64bit();

        deferral.resolve();
    };

    main();

    return deferral.promise;

};

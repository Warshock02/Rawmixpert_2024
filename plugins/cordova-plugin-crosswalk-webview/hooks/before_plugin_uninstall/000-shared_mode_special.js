#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
module.exports = function(context) {
    // Create a new Promise
    const promise = new Promise((resolve, reject) => {
        var UpdateConfig = require('./../update_config.js');
        var updateConfig = new UpdateConfig(context);

        // Main method
        var main = function() {
            // Remove the xwalk variables
            updateConfig.afterBuild64bit();

            // Resolve the promise
            resolve();
        };

        // Call the main method
        main();
    });

    // Return the Promise
    return promise;
};

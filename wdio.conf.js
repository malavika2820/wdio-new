const allure = require('allure-commandline');
const commands = require('./utils/commands.js');

exports.config = {
    runner: 'local',
    specs: [
        './test/specs/mathbuddy/uiautomation.spec.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{ 
     maxInstances: 1,
     browserName: 'chrome',
    //     acceptInsecureCerts: true,
    //     'goog:chromeOptions': {
    //         args: [
    //             "--incognito"
    //         ]
    //     }
    //  }, {
    //     maxInstances: 1,
    //     browserName: 'firefox',
    //     'moz:firefoxOptions': {
    //         args: [
    //             "-private"
    //         ],
    //     },
    //     timeouts: {
    //         pageLoad: 30000
    //     }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://containers.mathbuddyonline.com/login.html',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: function (capabilities, specs) {
        require('expect-webdriverio').setOptions({wait: 10000, interval: 500});
    },
    beforeCommand: function (commandName, args) {
        Object.keys(commands).forEach(key => {
            browser.addCommand(key, commands[key]);
        });
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
    onComplete: function(exitCode, config, capabilities, results) {
        const reportError = new Error('Could not generate Allure report');
        const generation = allure(['generate', 'allure-results', '--clean']);
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(() => reject(reportError), 30000);

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout);

                if (exitCode !== 0) {
                    return reject(reportError);
                }

                console.log('Allure report successfully generated');
                resolve();
            });
        });
    }
}

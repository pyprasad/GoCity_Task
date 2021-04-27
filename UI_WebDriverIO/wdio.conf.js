exports.config = {
    runner: 'local',
    specs: [
        './src/features/**/*.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{    
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://gocity.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver','devtools'],
    framework: 'cucumber',
    reporters: [
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
    ],

    cucumberOpts: {
        require: ['./src/features/step-definitions/passesteps.js','./src/features/step-definitions/paymentsteps.js'],
        backtrace: false,
        requireModule: ['@babel/register'],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 100000,
        ignoreUndefinedDefinitions: false
    },
}

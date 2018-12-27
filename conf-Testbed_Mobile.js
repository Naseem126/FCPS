
// var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// var today = new Date(),
// timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4723/wd/hub',
    specs: ['./FCPS/TestBed_Mobile.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    capabilities: {
        'browserName': 'chrome',
        'appium-version': '1.10.0',
        'platformName': 'android',
        'platformVersion': '9',
        'deviceName': 'emulator-5554',
        'CHROMEDRIVER_VERSION': '2.40'
    },
}
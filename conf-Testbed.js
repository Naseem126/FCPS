
// var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// var today = new Date(),
// timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';

    exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./FCPS/TestBed.js'],
        capabilities: {
            'browserName': 'chrome',
            'chromeOptions': {
                'args': ['show-fps-counter=true'],
                'mobileEmulation' : {
                    'deviceName': 'iPhone 6/7/8'
                }
            }
        },
    // multiCapabilities: [{
    //   browserName: 'firefox'
    // }, {
    //   browserName: 'chrome'
    // }],
    // onPrepare: function() {
    //   jasmine.getEnv().addReporter(
    //     new Jasmine2HtmlReporter({
    //       savePath: './Reports' +'_'+ timeStamp
    //     })
    // );
//  }
};
var HtmlReporter = require('protractor-beautiful-reporter');

var today = new Date(),
    timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';
var originalJasmine2MetaDataBuilder = new HtmlReporter({'baseDirectory': './'})["jasmine2MetaDataBuilder"];

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./FCPS/esy.js'],

    capabilities: {
        'browserName': 'chrome'
        // ,
        // 'chromeOptions': {
        //     'args': ["--headless", "--disable-gpu", "--start-maximized"]
        // }
    },

    // multiCapabilities: [{
    //   browserName: 'firefox'
    // }, {
    //   browserName: 'chrome',
    //     chromeOptions: {
    //         // args: [ "--headless", "--disable-gpu"]
    //     }
    //
    //
    //
    // }],
    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/Reports/Reports`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'ESY_Reports/Reports'+'_'+timeStamp,
            clientDefaults:{
                columnSettings:{
                    displayTime:true,
                    displayBrowser:true,
                    displaySessionId:true,
                    inlineScreenshots:false
                }
            }     ,
            takeScreenShotsOnlyForFailedSpecs: true,
            screenshotsSubfolder: 'images',
            jasmine2MetaDataBuilder: function (spec, descriptions, results, capabilities) {
                //filter for pendings with pending() function and "unfail" them
                if (results && results.failedExpectations && results.failedExpectations.length>0 && "Failed: => marked Pending" === results.failedExpectations[0].message) {
                    results.pendingReason = "Marked Pending with pending()";
                    results.status = "pending";
                    results.failedExpectations = [];
                }
                //call the original method after my own mods
                return originalJasmine2MetaDataBuilder(spec, descriptions, results, capabilities);
            },
            preserveDirectory: false

        }).getJasmine2Reporter());
    }
};
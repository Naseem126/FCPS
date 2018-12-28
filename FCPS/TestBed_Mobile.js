
describe('FCPS Test suite', function() {

    var top_banner = element(by.css("img[class='col-4 mx-auto']"));
    var bottom_logo = element(by.css("img[class='col-xl-6 col-8 mx-auto'"));
    var Contact_info_on_Login_screen = element(by.css("p[class='m-4'"));
    var MobileDetect = require('mobile-detect');
    var md= new MobileDetect(window.navigator.userAgent);

    console.log( md.mobile() );
    console.log( md.phone() );
    console.log( md.tablet() );          // null
    console.log( md.userAgent() );       // 'Safari'
    console.log( md.os() );              // 'AndroidOS'
    console.log( md.is('iPhone') );      // false
    console.log( md.is('bot') );         // false
    console.log( md.version('Webkit') );         // 534.3
    console.log( md.versionStr('Build') );       // '4.1.A.0.562'
    console.log( md.match('playstation|xbox') ); // false
});
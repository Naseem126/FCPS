
describe('FCPS Test suite', function() {

    var top_banner = element(by.css("img[class='col-4 mx-auto']"));
    var bottom_logo = element(by.css("img[class='col-xl-6 col-8 mx-auto'"));
    var Contact_info_on_Login_screen = element(by.css("p[class='m-4'"));

    // beforeEach(function () {

    browser.get('https://dss-psychologist.insystechinc.com/auth/login');
    // browser.sleep(3000).then(function () {
    //
    //             console.log("The site is opened and the system waited 3 seconds");
    //
    // });

    // });

    it('Fairfax county Logo image validation', function(){

        expect (top_banner.isDisplayed());
        expect (bottom_logo.isDisplayed());

    })
    it('Contact Text Validation', function(){

        expect (Contact_info_on_Login_screen.isDisplayed())

        var contact_Text = Contact_info_on_Login_screen.getText();
        var Donna_Douglas = element(by.css("body > app-root > app-login > div > div > div > div > div > div.card-header.py-3.d-flex.justify-content-between.align-items-center > div > p > a:nth-child(1) > span:nth-child(1)"));
        expect (contact_Text).toEqual('This application will allow monthly reporting in a secure environment. Questions about filling in the report data or access to the application, please call Donna Douglas / DeDe Bailer at 571-423-4250. For software issues, email Yixin Wilson .');
        Donna_Douglas.getCssValue('color').then(function(Col_Don){
            console.log(" The color for donna is :" + Col_Don);

        });

    });
    it('FCPS Submit Button Present', function() {
        var BodyText =  element(by.css('button[type="submit"]'));
        expect (BodyText.getText()).toEqual('Submit');
    });
});


describe('FCPS Test suite', function() {

    var top_banner = element(by.css("img[class='col-4 mx-auto']"));
    var bottom_logo = element(by.css("img[class='col-xl-6 col-8 mx-auto'"));
    var Contact_info_on_Login_screen = element(by.css("p[class='m-4'"));
    var FCPS_TextBox = element(by.css('input[value="FCPS"]'));
    var exampleInputEmail1_Lebel = element(by.cssContainingText('label', 'Username'));
    var Email_Input_box =  element(by.id('exampleInputEmail1'));
    var exampleInputPassword_Lebel = element(by.cssContainingText('label', 'Password'));
    var Password_Input_Box = element(by.id('exampleInputPassword1'));
    var Submit_Button =  element(by.css('button[type="submit"]'));
    // var top_Left_Banner = $('.sidebar-header text-white bg-danger');
    var top_Left_Banner = $('a[href="/dashboard/reg-teacher"]');
    var ESY_DB_Label = $('.title text-truncate');
    var Hamburger_Menu = element(by.cssContainingText("i",'menu'));


    // beforeEach(function () {
    // browser.driver.manage().window().maximize();
    browser.get('https://dss-esy.insystechinc.com/auth/login');
    // browser.sleep(3000).then(function () {
    //
    //             console.log("The site is opened and the system waited 3 seconds");
    //
    // });

    // });

    it('Fairfax county Logo image validation', function(){

        expect (top_banner.isDisplayed());
        expect (bottom_logo.isDisplayed());

    });
    it('Contact Text Validation', function(){

        expect (Contact_info_on_Login_screen.isDisplayed());

        var contact_Text = Contact_info_on_Login_screen.getText();
        expect (contact_Text).toEqual('Welcome to the Extended School Year (ESY) Summer Services Program. Use this system to register students to attend the ESY program as determined by the IEP Team. Please contact the ESY Program Office at 571-423-4190 for further assistance.');

    });

    it('FCPS Box Validation', function() {
        expect (FCPS_TextBox.isDisplayed());
    });

    it ("username lebel validation", function () {
        expect (exampleInputEmail1_Lebel.isDisplayed());
    });
    it ('Email Input textbox validation', function() {
        expect (Email_Input_box.isDisplayed());
    });
    it ("Password lebel validation", function () {
        expect (exampleInputPassword_Lebel.isDisplayed());
    });

    it('Password input box validation', function () {

        expect (Password_Input_Box.isDisplayed())

    });
    it('FCPS Submit Button Present', function() {

        expect (Submit_Button.getText()).toEqual('Submit');
    });

    it ('Login Function', function () {

        Submit_Button.click();
        browser.sleep(1000);

    });
    it ('Title Validation', function() {browser.getTitle().then(function (Title) {

        expect (Title).toEqual('ESY Summer Services');
        });
    });
    it ('ESY DB Top Left Label Validation', function () {

        expect (top_Left_Banner.isDisplayed());
        expect (top_Left_Banner.getText()).toEqual('Reg Teacher Dashboard');

    });

    it ('Dashboard Title Validation', function () {

        expect (ESY_DB_Label.isDisplayed());
        expect (ESY_DB_Label.getText()).toEqual('ESY Summer Services')

    });

    it('Hamburger Menu Click Validation', function () {
        expect(Hamburger_Menu.isDisplayed());
        Hamburger_Menu.click();
        browser.sleep(5000);
        expect(top_Left_Banner.isDisplayed()).toBe(false);
        Hamburger_Menu.click();
        browser.sleep(5000);
        expect (top_Left_Banner.isDisplayed()).toBe(true);
        // expect (invisibilityOf())



    })
});


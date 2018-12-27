describe('TestBed Tests', function(){

    browser.get('https://www.yahoo.com/');

    it ('Title Validation', function() {browser.getTitle().then(function (Title) {

        expect (Title).toEqual('Yahoo!');
    });
    });

    })
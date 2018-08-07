//This test should output 2 skipped tests, 1 failed test and 1 passed test. Bug #127 (recently fixed) causes allure to display 1 skipped test, 1 failed test and 1 passed test
//The before and after methods make this a bit more difficult: Allure will display 2 passed tests (2c and the after hook), 1 failed test, and 1 skipped test (the before hook) 
//I don't yet know how the fix for issue #127 will influence the behaviour of hooks combined with skips


const chai = require('chai');
global.expect = chai.expect;
chai.Should();

describe('Allure test2 with hooks and skips', function() {

    before(() => {        
        console.log("allure test 2 before method")
        browser.url("https://www.google.com") 
      });
    
    after(() => {
        console.log("allure test 2 after method")
        browser.url("https://www.google.com")      
      });
    
    it.skip('2a. this is a skipped test', function () {   
    })

    it.skip('2b. this is another skipped test', function () {      
    });

    it('2c. this is an enabled test that has a successfull assert', function () {  
        chai.expect("foo", "foo should equal foo").to.contain("foo")    
    });

    it('2d. this is an enabled test that has a failed assert', function () {   
        chai.expect("foo", "foo should equal foo").to.contain("bar")    
    });
    
});
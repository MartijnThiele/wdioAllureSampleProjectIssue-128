//This spec should output 1 failed test and 1 passed test. Allure sees the before and after method as separate tests, so it reports 1 failed test and 3 passed tests, which is incorrect

const chai = require('chai');
global.expect = chai.expect;
chai.Should();

describe('Allure test 1, with hooks', function() {
   
    before(() => {        
        console.log("allure test 1 before method")
        browser.url("https://www.google.com")
      });

    beforeEach(() => {
        console.log("allure test 1 before each method")        
      });

    
    after(() => {
        console.log("allure test 1 after method")  
        browser.url("https://www.google.com")     
      });

    afterEach(() => {
        console.log("allure test 1 after each method");       
      });

    it('1a. this is an enabled test that has a successfull assert', function () {  
        chai.expect("foo", "foo should equal foo").to.contain("foo")    
    });

    it('1b. this is an enabled test that has a failed assert', function () {   
        chai.expect("foo", "foo should equal foo").to.contain("bar")    
    });
    
});
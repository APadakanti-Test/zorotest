const { Given, When, Then } = require('cucumber');
//import loginPage from '../pageObjects/Login.page';
const assert = require('assert');

Given(/^I m on login page$/, function () {
 //   yahooPage.open();
   // browser.getTitle().should.equal('Yahoo Search - Web Search');
   browser.url('/');
        $('//span[text()="Log in"]').click();
       // var text = browser.getText('Returning Customer');
       var text = $('headingPrimary.headingPrimary__modal').getText()
       console.log(text)
       // assert(text === 'Returning Customer'); // true
    const pageUrl = browser.getUrl();
    assert.notEqual(pageUrl, 'http://testyourlog.in/example/');
    assert.equal(pageUrl, 'https://www.zoro.co.uk/');
  });




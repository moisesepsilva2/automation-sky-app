const quiz = require('../../pageObjects/quiz.page');
const main = require('../../pageObjects/main.page');
const highlights = require('../../pageObjects/highlights.page');

describe('login test', () => {
    it('should be possible to reach login page', () => {
    
        quiz.continueBtn.click();
        //driver.saveScreenshot('./data/screenshot.png');
        main.highlightsBtn.click();
        main.highlightsBtn.click();
        
        highlights.likeBtn.click();

        highlights.loginBtn.click();
        driver.pause(3000);
        console.log(driver.getPageSource());
    })
});

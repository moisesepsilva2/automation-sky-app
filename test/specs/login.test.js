const quiz = require('../../pageObjects/quiz.page');
const bottonMenu = require('../../pageObjects/bottonMenu.page');
const highlights = require('../../pageObjects/highlights.page');
const login = require('../../pageObjects/login.page');
const user = require('../../data/user');

describe('login test', () => {

    before(()=> {
        quiz.continueBtn.click();
         driver.touchAction({ //it taps the screen center to close pop up
            action: 'tap',
            x:380,
            y:810
        })
        bottonMenu.highlightsBtn.click();
        highlights.likeBtn.click();
        highlights.loginBtn.click();
      });

      afterEach(()=> {
        login.backBtn.click();
        highlights.likeBtn.click();
        highlights.loginBtn.click();
      });

    it('should be possible to reach login page', () => {
    
        //assert.equal(highlights.loginBtn.isDisplayed(),'true',"Login button not shown",driver.saveScreenshot('./fail/loginBtn_fail.png'));
        assert.equal(login.cpfText.isDisplayed(),true,"Login screen not shown")//, driver.saveScreenshot('./fail/login_screen_fail.png'));
    })

    it('should alert an login attempt with invalid CPF', () => {
      login.cpfText.addValue(user.data.invalidCPF);
      driver.pause(3000);
      assert.equal(login.invalidCPFMessage.isDisplayed(),true,"Invalid CPF alert not shown")//, driver.saveScreenshot('./fail/login_screen_cpfAlert.png'));
   })

   it('should not enable [Próximo] with invalid CPF', () => {
    login.cpfText.addValue(user.data.invalidCPF);
    driver.pause(3000);
    assert.equal(login.nextBtn.IsEnabled(),false,"[Próximo] shown improperly enabled")//, driver.saveScreenshot('./fail/login_screen_cpfAlert.png'));
 })
});

const quiz = require('../../pageObjects/quiz.page');
const bottonMenu = require('../../pageObjects/bottonMenu.page');
const highlights = require('../../pageObjects/highlights.page');
const login = require('../../pageObjects/login.page');
const user = require('../../data/user');

describe('login test', () => {

    before(()=> {
        quiz.continueBtn.click();
        driver.touchAction({action:'tap', x:380, y:810});
        bottonMenu.highlightsBtn.click();
        highlights.likeBtn.click();
      });

    afterEach(()=> {
        login.backBtn.click();
        highlights.likeBtn.click();
      });

    it('should be possible to reach login page', () => {
        highlights.loginBtn.click();
        assert.equal(login.cpfText.isDisplayed(),true,"Login screen not shown");
    });

    it('should alert an login attempt with invalid CPF', () => {
        highlights.loginBtn.click();
        login.cpfText.addValue(user.data.invalidCPF);
        driver.pause(3000);
        assert.equal(login.invalidCPFMessage.isDisplayed(),true,"Invalid CPF alert not shown");
   });

    it('should not enable [Próximo] with invalid CPF', () => {
        highlights.loginBtn.click();
        login.cpfText.addValue(user.data.invalidCPF);
        driver.pause(3000);
        assert.equal(login.nextBtn.isEnabled(),false,"[Próximo] shown improperly enabled");
   });
 
 
    it('should enable [Próximo] with valid CPF', () => {
        highlights.loginBtn.click();
        login.cpfText.addValue(user.data.validCPF);
        driver.pause(3000);
        assert.equal(login.nextBtn.isEnabled(),true,"[Próximo] not shown properly enabled");
   });

    it('should show [Quero Assinar] link as enabled', () => {
        highlights.loginBtn.click();
        assert.equal(login.signLink.isEnabled(),true,"[Quero Assinar] not shown as enabled");
    });

    it('should show an unknown subscriber alert when user not found', () => {
        highlights.loginBtn.click();
        login.cpfText.addValue(user.data.validCPF);
        driver.pause(3000);
        login.nextBtn.click();
        assert.equal(login.notSubscribed.isDisplayed(),true,"unknown subscriber alert not shown");
        login.tryAgainBtn.click();
   });

});

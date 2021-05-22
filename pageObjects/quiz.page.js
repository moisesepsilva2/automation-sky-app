class Quiz {
   
    get playQuizBtn () { return $('//*[@text="JOGAR"]') }
    get continueBtn () { return $('//*[@text="CONTINUAR PARA SKY"]') }

} module.exports = new Quiz();


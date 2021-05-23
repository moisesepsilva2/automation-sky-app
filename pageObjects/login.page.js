class Login {

get cpfText() { return $('//*[@resource-id="br.com.sky.selfcare:id/2131428526"]')};
get nextBtn() { return $('//*[@resource-id="br.com.sky.selfcare:id/2131427661"]')};
get signLink() { return $('//*[@text="Quero Assinar"]')};
get invalidCPFMessage() { return $('//*[@text="CPF inválido. Digite novamente."]')};
get backBtn() { return $('//*[@content-desc="Navegar para cima"]')};
get notSubscribed() { return $('//*[@resource-id="br.com.sky.selfcare:id/2131431266"]')};
get tryAgainBtn() { return $('//*[@text="Tentar outros dados"]')};

} module.exports = new Login();
class Login {

get cpfText() { return $('//*[@resource-id="br.com.sky.selfcare:id/2131428526"]')};
get nextBtn() { return $('//*[@resource-id="br.com.sky.selfcare:id/2131427846"]')};
get signLink() { return $('//*[@text="Quero Assinar"]')};
get invalidCPFMessage() { return $('//*[@text="CPF inválido. Digite novamente."]')};
get backBtn() { return $('//*[@content-desc="Navegar para cima"]')};

} module.exports = new Login();
const config = {
  "ownerID": "740949459512590467",//Bu kısıma, kendi ID'niz. 
  "sahip": ["727909489939972218"],
  "admins": ["513445414406586386"],//Yetkili eklemek isterseniz, o kişinin ID'si.
  "support": [""],//Destek ekibi eklemek isterseniz, o kişinin ID'si.
  "token": "ODc3MTQxODUxNjYzMTE0Mjgx.YRuUAQ.4D64DcdrCWiVxxrdaV6ka215hdw",//Botun, tokeni.
  "dashboard" : {
    "oauthSecret": "",//Client secret.
    "callbackURL": `https://v12muzik.glitch.me/callback`,//oAuth2 kısmında bulunan kutucuğa, bu bağlantıyı ekleyiniz.
    "sessionSecret": "Codare",//Bu kısımı, değiştirmeyiniz.
    "domain": "https://v12muzik.glitch.me"//Sitenin, adresi.
  }
};

module.exports = config;
let user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstname: 'Buillaume',
  lastname: 'Ialva',
  location: 'Telaviv',
  occupation: 'Engineer'
}

function logWelcomeUser(welcomeString) {
  console.log(`${welcomeString}, ${this.firstname}. Your occupation is: ${this.occupation}`)
}
let bindLogWelcome = logWelcomeUser.bind(user);
bindLogWelcome('Hello');

export default class Utilisateur {


  constructor(public email: string, public mdp: string, public role: string, public nom: string, public prenom: string, public soldeConges: number, public soldeRTT: number) {
  }
}

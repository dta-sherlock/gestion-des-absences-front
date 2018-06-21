import {Injectable} from '@angular/core';
import Utilisateur from '../model/utilisateur';

@Injectable()
export class UtilisateurService {


  role = '';
  nom = '';

  constructor() {
  }


  initialisationRole(utilisateur: Utilisateur) {
    this.role = utilisateur.role;
    this.nom = utilisateur.nom;
    console.log(this.role);
  }

  reinitialisationRole() {
    this.role = '';
    this.nom = '';
  }

}

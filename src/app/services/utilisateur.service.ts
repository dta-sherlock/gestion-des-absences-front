import {Injectable} from '@angular/core';
import Utilisateur from '../model/utilisateur';
import {UTILISATEUR} from '../app.constante';

@Injectable()
export class UtilisateurService {

  constructor() {
  }

  initialisationRole(utilisateur: Utilisateur) {
    UTILISATEUR.role = utilisateur.role;
    UTILISATEUR.nom = utilisateur.nom;
    UTILISATEUR.prenom = utilisateur.prenom;
    UTILISATEUR.email = utilisateur.email;
  }

  reinitialisationRole() {
    UTILISATEUR.role = '';
    UTILISATEUR.nom = '';
    UTILISATEUR.prenom = '';
    UTILISATEUR.email = '';
  }
}

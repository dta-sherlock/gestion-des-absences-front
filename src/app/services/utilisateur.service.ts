import {Injectable} from '@angular/core';
import Utilisateur from '../model/utilisateur';
import {UTILISATEUR} from '../app.utilisateur';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {PATH_LAYOUT} from '../app.constRoute';
import {Router} from '@angular/router';
import * as sha from 'sha256';


const API_BASE_URL = 'https://absences-back.cleverapps.io/api';

@Injectable()
export class UtilisateurService {

  constructor(private http: HttpClient, private router: Router) {
  }

  initialisationRole(utilisateur: Utilisateur) {
    UTILISATEUR.id = utilisateur.id;
    UTILISATEUR.grade = utilisateur.grade;
    UTILISATEUR.nom = utilisateur.nom;
    UTILISATEUR.prenom = utilisateur.prenom;
    UTILISATEUR.email = utilisateur.email;
    UTILISATEUR.soldeConges = utilisateur.soldeConges;
    UTILISATEUR.soldeRtt = utilisateur.soldeRtt;
  }

  reinitialisationRole() {
    UTILISATEUR.id = 0;
    UTILISATEUR.grade = '';
    UTILISATEUR.nom = '';
    UTILISATEUR.prenom = '';
    UTILISATEUR.email = '';
    UTILISATEUR.soldeConges = 0;
    UTILISATEUR.soldeRtt = 0;
  }

  authentificationIsValid(utilisateur: Utilisateur) {
    this.getUtilisateurs().toPromise().then(
      utilisateurs =>
        utilisateurs.forEach(u => {
          if (u.email.toString() === utilisateur.email.toString()
            && u.mdp.toString() === sha(utilisateur.mdp.toString())) {
            this.initialisationRole(u);
            this.router.navigate([PATH_LAYOUT]);
            return true;
          }

        })
    );
   return false;
  }

  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${API_BASE_URL}/utilisateurs`);
  }

  deleteUtilisateur(id: number) {
    return this.http.delete(`${API_BASE_URL}/utilisateurs/${id}`);
  }

  deleteAllUtilisateur() {
    return this.http.delete(`${API_BASE_URL}/utilisateurs/`);
  }

  addUtilisateur(utilisateur: Utilisateur) {
    return this.http.post<Utilisateur>(`${API_BASE_URL}/utilisateurs/`, utilisateur);
  }

  modifUtilisateur(utilisateur: Utilisateur) {
    return this.http.put<Utilisateur>(`${API_BASE_URL}/utilisateurs/${utilisateur.id}`, utilisateur);
  }
}

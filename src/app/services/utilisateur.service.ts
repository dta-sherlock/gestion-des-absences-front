import {Injectable} from '@angular/core';
import Utilisateur from '../model/utilisateur';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import * as sha from 'sha256';


const API_BASE_URL = 'https://absences-back.cleverapps.io/api';
export const UTILISATEUR: Utilisateur = new Utilisateur(0, '', '', '', '', '', 0, 0);

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


  getUtilisateurByEmailAndMdp(utilisateur: Utilisateur) {
    return this.http.get<Utilisateur>(`${API_BASE_URL}/utilisateurs?email=${utilisateur.email}&mdp=${sha(utilisateur.mdp)}`);

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

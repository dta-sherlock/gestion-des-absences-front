import {Injectable} from '@angular/core';
import Utilisateur from '../model/utilisateur';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import * as sha from 'sha256';

const API_BASE_URL = 'https://absences-back.cleverapps.io/api';

@Injectable()
export class UtilisateurService {
  static utilisateur: Utilisateur;

  constructor(private http: HttpClient, private router: Router) {
  }

  initialisationRole(utilisateur: Utilisateur) {
    UtilisateurService.utilisateur = utilisateur;
  }

  reinitialisationRole() {
    UtilisateurService.utilisateur = null;
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

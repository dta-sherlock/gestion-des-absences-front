import {Injectable} from '@angular/core';
import Utilisateur from '../model/utilisateur';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import * as sha from 'sha256';
import {API_BASE_URL, API_UTILISATEUR} from './constServices';


@Injectable()
export class UtilisateurService {
  private utilisateur: Utilisateur;

  constructor(private http: HttpClient) {
  }


  initialisationRole(utilisateur: Utilisateur) {
    this.setUtilisateurCourant(utilisateur);
  }
  reinitialisationRole() {
    this.setUtilisateurCourant(null);
  }

  setUtilisateurCourant(utilisateur: Utilisateur) {
    this.utilisateur = utilisateur;
  }


  getUtilisateurCourant() {
    return this.utilisateur;
  }


  getUtilisateurByEmailAndMdp(utilisateur: Utilisateur) {
    return this.http.get<Utilisateur>(`${API_BASE_URL}${API_UTILISATEUR}?email=${utilisateur.email}&mdp=${sha(utilisateur.mdp)}`);
  }
  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${API_BASE_URL}${API_UTILISATEUR}`);
  }

  deleteUtilisateurId(id: number) {
    return this.http.delete(`${API_BASE_URL}${API_UTILISATEUR}/${id}`);
  }

  deleteAllUtilisateur() {
    return this.http.delete(`${API_BASE_URL}${API_UTILISATEUR}/`);
  }

  addUtilisateur(utilisateur: Utilisateur) {
    return this.http.post<Utilisateur>(`${API_BASE_URL}${API_UTILISATEUR}/`, utilisateur);
  }

  modifUtilisateur(utilisateur: Utilisateur) {
    return this.http.put<Utilisateur>(`${API_BASE_URL}${API_UTILISATEUR}/${utilisateur.id}`, utilisateur);
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PATH_LOGIN} from '../app.constRoute';
import {UtilisateurService} from '../services/utilisateur.service';
import {UTILISATEUR} from '../app.constante';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [
    UtilisateurService
  ]
})
export class LayoutComponent implements OnInit {

  utilisateur: Utilisateur = UTILISATEUR;



  isNavbarCollapsed = true;

  constructor(private router: Router, private utilisateurService: UtilisateurService) {
  }

  ngOnInit() {
  }

  deconnexion() {
    this.utilisateurService.reinitialisationRole();
    this.router.navigate([PATH_LOGIN]);

  }

}

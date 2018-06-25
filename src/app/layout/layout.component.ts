import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PATH_LOGIN} from '../app.constRoute';
import {UtilisateurService} from '../services/utilisateur.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [
    UtilisateurService
  ]
})
export class LayoutComponent implements OnInit {

  nomUtilisateur: String = this.utilisateurService.nom;
  roleUtilisateur: String = this.utilisateurService.role;


  isNavbarCollapsed = true;

  constructor(private router: Router, private utilisateurService: UtilisateurService) {
  }

  ngOnInit() {
  }

  deconnexion() {
    this.utilisateurService.reinitialisationRole();
    this.router.navigate([PATH_LOGIN]);
    console.log(this.utilisateurService.role);

  }

}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Utilisateur from '../model/utilisateur';
import {Router} from '@angular/router';
import {PATH_LAYOUT} from '../app.constRoute';
import {UtilisateurService} from '../services/utilisateur.service';
import {UTILISATEUR} from '../app.constante';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    FormBuilder,
    UtilisateurService
  ]
})
export class LoginComponent implements OnInit {
  utilisateurs: Array<Utilisateur> = [
    new Utilisateur('admin@gmail.com', 'admin', 'Administrateur', 'Dubois', 'Jean', 8, 4),
    new Utilisateur('collabo@gmail.com', 'collabo', 'collabo', 'Dupuis', 'Jacques', 12, 4),
    new Utilisateur('utilisateur@gmail.com', 'utilisateur', 'Employé', 'Hitchcock', 'Alfred', 4, 0),
    new Utilisateur('manager@gmail.com', 'manager', 'Manager', 'Sebastien', 'Georges', 0, 0)

  ];
  utilisateur: Utilisateur;
  mdpCtrl: FormControl;
  emailCtrl: FormControl;
  loginForm: FormGroup;
  authentificationValide = true;

  constructor(private router: Router, private utilisateurService: UtilisateurService,
              fb: FormBuilder) {
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.mdpCtrl = fb.control('', [Validators.required]);
    this.loginForm = fb.group({
      mdp: this.mdpCtrl,
      email: this.emailCtrl
    });
  }

  connexion() {

    this.utilisateurs.forEach(u => {
      if (u.email === this.utilisateur.email && u.mdp === this.utilisateur.mdp) {
        this.utilisateurService.initialisationRole(u);
        this.authentificationValide = true;
        this.router.navigate([PATH_LAYOUT]);

      }

    });
    if (UTILISATEUR.role === '') {
      this.authentificationValide = false;
    }
  }

  ngOnInit() {
    this.utilisateur = new Utilisateur('', '', '', '', '', -1, -1);

  }

}


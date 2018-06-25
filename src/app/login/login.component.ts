import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Utilisateur from '../model/utilisateur';
import {Router} from '@angular/router';
import {UtilisateurService} from '../services/utilisateur.service';




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
    this.authentificationValide = this.utilisateurService.authentificationIsValid(this.utilisateur);
  }

  ngOnInit() {

    this.utilisateur = new Utilisateur(0, '', '', '', '', '', 0, 0);

  }

}


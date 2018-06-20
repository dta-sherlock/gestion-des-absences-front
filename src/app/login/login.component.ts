import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    FormBuilder
  ]
})
export class LoginComponent implements OnInit {
  utilisateurs: Array<Utilisateur> = [
    new Utilisateur('admin@gmail.com', 'admin', 'admin'),
    new Utilisateur('collabo@gmail.com', 'collabo', 'collabo'),
    new Utilisateur('utilisateur@gmail.com', 'utilisateur', 'utilisateur'),
    new Utilisateur('manager@gmail.com', 'manager', 'manager')
  ];
  utilisateur: Utilisateur;
  mdpCtrl: FormControl;
  emailCtrl: FormControl;
  loginForm: FormGroup;
  authentificationValide: boolean = true;

  constructor(fb: FormBuilder) {
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.mdpCtrl = fb.control('', [Validators.required]);
    this.loginForm = fb.group({
      mdp: this.mdpCtrl,
      email: this.emailCtrl
    });
  }

  handleSubmit() {

    this.utilisateurs.forEach(u => {
      if (u.email === this.utilisateur.email && u.mdp === this.utilisateur.mdp) {
        ROLE_UTILISATEUR.role = u.role;
        this.authentificationValide = true;

      }

    });
    if (ROLE_UTILISATEUR.role === '') {
      this.authentificationValide = false;
    }

    console.log(ROLE_UTILISATEUR.role);
    ROLE_UTILISATEUR.role = '';
  }

  ngOnInit() {
    this.utilisateur = new Utilisateur('', '', '');

  }

}

export class Utilisateur {


  constructor(public email: string, public mdp: string, public role: string) {
  }
}

export const ROLE_UTILISATEUR: Utilisateur = new Utilisateur('', '', '');

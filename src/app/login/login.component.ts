import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ROLE_UTILISATEUR} from '../constRole';
import Utilisateur from '../model/utilisateur';
import RoleService from '../role.service';


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
    new Utilisateur('admin@gmail.com', 'admin', 'admin', 'Jean'),
    new Utilisateur('collabo@gmail.com', 'collabo', 'collabo', 'Jacques'),
    new Utilisateur('utilisateur@gmail.com', 'utilisateur', 'utilisateur', 'Alfred'),
    new Utilisateur('manager@gmail.com', 'manager', 'manager', 'Georges')
  ];
  utilisateur: Utilisateur;
  mdpCtrl: FormControl;
  emailCtrl: FormControl;
  loginForm: FormGroup;
  authentificationValide = true;

  constructor(fb: FormBuilder, private roleService: RoleService) {
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
        this.roleService.initialisationRole(u);
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
    this.utilisateur = new Utilisateur('', '', '', '');

  }

}


import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from '../services/utilisateur.service';
import Utilisateur from '../model/utilisateur';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [
    UtilisateurService
  ]
})
export class CounterComponent implements OnInit {

  utilisateur: Utilisateur = UtilisateurService.utilisateur;

  constructor() {
  }

  ngOnInit() {
  }

}

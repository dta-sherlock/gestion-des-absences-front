import {Component, OnInit} from '@angular/core';
import {Absence} from '../model/absence';
import {AbsenceService} from '../services/AbsenceService';
import {UtilisateurService} from '../services/utilisateur.service';
import Utilisateur from '../model/utilisateur';

@Component({
  selector: 'app-validation-demande',
  templateUrl: './validation-demande.component.html',
  styleUrls: ['./validation-demande.component.css']
})
export class ValidationDemandeComponent implements OnInit {
  absences: Array<Absence>;
  utilisateur: Utilisateur = UtilisateurService.utilisateur;

  constructor(private service: AbsenceService) {
  }

  ngOnInit() {
    this.service.getAbsences().subscribe(abs => {
      this.absences = abs;
    });

  }
}

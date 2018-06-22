import {Component, OnInit} from '@angular/core';
import {Absence} from '../model/absence';
import {typeEnum} from '../model/typeEnum';
import {statut} from '../model/EumStatu';
import Utilisateur from '../model/utilisateur';
import {UTILISATEUR} from '../app.constante';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AbsenceService} from '../services/AbsenceService';


@Component({
  selector: 'app-absences-management',
  templateUrl: './absences-management.component.html',
  styleUrls: ['./absences-management.component.css'],
})
export class AbsencesManagementComponent implements OnInit {

  closeResult: string;
  _absences: Array<Absence> = [];
  utilisateur: Utilisateur = UTILISATEUR;
  rtt: number;
  congepaye: number;

  constructor(private modalService: NgbModal) {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  deleteAbsence(absences: Absence) {
    return this._absences.splice(this._absences.indexOf(absences), 1);
  }
  ngOnInit() {
    this._absences=[
      new Absence(new Date('6/15/15'), new Date('7/15/15'), typeEnum.CONGE_PAYE, statut.INITIALE),
      new Absence(new Date('8/15/15'), new Date('8/20/16'), typeEnum.CONGE_SANS_SOLDE, statut.EN_ATTENTE8_VALIDATION),
      new Absence(new Date('9/15/16'), new Date('10/15/16'), typeEnum.RTT, statut.REJETEE),
      new Absence(new Date('9/15/16'), new Date('10/15/16'), typeEnum.MISSION, statut.REJETEE)
    ];
    this.rtt = this.utilisateur.soldeRTT;
    this.congepaye = this.utilisateur.soldeConges;


  }
}

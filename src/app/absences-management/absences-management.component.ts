import {Component, OnInit} from '@angular/core';
import {Absence} from '../model/absence';
import Utilisateur from '../model/utilisateur';
import {UTILISATEUR} from '../app.constante';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AbsenceService} from '../services/AbsenceService';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-absences-management',
  templateUrl: './absences-management.component.html',
  styleUrls: ['./absences-management.component.css'],
})
export class AbsencesManagementComponent implements OnInit {

  closeResult: string;
  private _absences: Array<Absence>;
  utilisateur: Utilisateur = UTILISATEUR;
  rtt: number;
  congepaye: number;

  constructor(private modalService: NgbModal, private service: AbsenceService, private  http: HttpClient) {
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
    this._absences.splice(this._absences.indexOf(absences), 1);
    return this.service.deleteAbsenceId(absences).subscribe();
  }

  ngOnInit() {
    this.rtt = this.utilisateur.soldeRTT;
    this.congepaye = this.utilisateur.soldeConges;
    this.service.getAbsences().subscribe(abs => {
      this._absences = abs;
    });
  }
}

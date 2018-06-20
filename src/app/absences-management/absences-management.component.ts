import {Component, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Absence} from '../model/absence';
import {typeEnum} from '../model/typeEnum';
import {statut} from '../model/EumStatu';
import {CRUD_Enum} from '../model/CRUD_Enum';

@Component({
  selector: 'app-absences-management',
  templateUrl: './absences-management.component.html',
  styleUrls: ['./absences-management.component.css'],

})
export class AbsencesManagementComponent implements OnInit {
absences:Array<Absence>=[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.absences=[
      new Absence( new Date('6/15/15'), new Date ('7/15/15'),typeEnum.CONGE_PAYE,statut.INITIALE,CRUD_Enum.DELETE),
      new Absence(new Date('8/15/15'),new Date ('8/20/16'),typeEnum.CONGE_SANS_SOLDE,statut.EN_ATTENTE8_VALIDATION,CRUD_Enum.UPDATE),
      new Absence(new Date('9/15/16'),new Date ('10/15/16'),typeEnum.RTT,statut.REJETEE,CRUD_Enum.READ)
    ]
  }

}

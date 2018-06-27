import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {isGreaterThanTodayValidator} from "../validators/validators";
import {DemandeAbsence} from "../Model/demande";
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-demande-absence',
  templateUrl: './demande-absence.component.html',
  styleUrls: ['./demande-absence.component.css'],
  providers: [
    FormBuilder
  ]
})
export class DemandeAbsenceComponent implements OnInit {

  private _success = new Subject<string>();
  successMessage: string;
  dateDebCtrl: FormControl;
  dateFinCtrl: FormControl;
  userForm: FormGroup;

  absence: DemandeAbsence = new DemandeAbsence(null,null,"","");

  model: NgbDateStruct;

  //Fonction utilisée pour griser les jours passés (jour courant inclus)
  avantDate(date: NgbDateStruct) {
    let dateFormat = new Date(date.year, date.month - 1, date.day);

    return moment().isAfter(dateFormat);
  }


  handleSubmit() {
    console.log(this.absence);
  }

  constructor(fb: FormBuilder) {
    this.dateDebCtrl = fb.control('', [Validators.required, isGreaterThanTodayValidator]);
    this.dateFinCtrl = fb.control('',[Validators.required, isGreaterThanTodayValidator]);
    this.userForm = fb.group({
      dateDeb: this.dateDebCtrl,
      dateFin: this.dateFinCtrl
    });
  }
  ngOnInit() {
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(3000)
    ).subscribe(() => this.successMessage = null);
  }
  public changeSuccessMessage() {
    this._success.next(`La demande d'absence a bien été envoyée.`);
  }
}

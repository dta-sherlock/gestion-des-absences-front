import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {isGreaterThanTodayValidator} from "../validators/validators";

@Component({
  selector: 'app-demande-absence',
  templateUrl: './demande-absence.component.html',
  styleUrls: ['./demande-absence.component.css'],
  providers: [
    FormBuilder
  ]
})
export class DemandeAbsenceComponent implements OnInit {

  retourVisualisationDemandes() {

  }

  dateDebCtrl: FormControl;
  dateFinCtrl: FormControl;
  userForm: FormGroup;

  absence = {
    "dateDeb": "",
    "dateFin": "",
    "type": "",
    "motif": ""
  }

  model: NgbDateStruct;
  avantDate(date: NgbDateStruct) {
    let date1= new Date();
    let dateDuJour: NgbDateStruct = { day: date1.getDate(), month: date1.getMonth()+1, year: date1.getFullYear()}
    if (date.year*10000+date.month*100+date.day <= dateDuJour.year*10000+dateDuJour.month*100+dateDuJour.day) {
      return true;
    } else {
      return false
    }
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
  }
}

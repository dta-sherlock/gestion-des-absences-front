import {Component, OnInit} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import * as moment from 'moment';
import {Subject} from 'rxjs/Subject';
import {isGreaterThanTodayValidator} from '../validators/validator';
import {FerieRtt} from '../model/ferie_rtt';

@Component({
  selector: 'app-creation-jours-feries',
  templateUrl: './creation-jours-feries.component.html',
  styleUrls: ['./creation-jours-feries.component.css']
})
export class CreationJoursFeriesComponent implements OnInit {

  successMessage: string;
  dateCtrl: FormControl;
  userForm: FormGroup;
  ferieRtt = new FerieRtt(null, null, null, '');
  model: NgbDateStruct;
  private _success = new Subject<string>();

  constructor(fb: FormBuilder) {
    this.dateCtrl = fb.control('', [Validators.required, isGreaterThanTodayValidator]);
    this.userForm = fb.group({
      date: this.dateCtrl
    });
  }

  // Fonction utilisée pour griser les jours passés (jour courant inclus)
  avantDate(date: NgbDateStruct) {
    const dateFormat = new Date(date.year, date.month - 1, date.day);
    return moment().isAfter(dateFormat);
  }

  handleSubmit() {
    console.log(this.ferieRtt);
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

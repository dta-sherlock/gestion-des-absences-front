import {FormControl} from "@angular/forms";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

export function isGreaterThanTodayValidator(control: FormControl) {
  let date = control.value;
  let date1= new Date();
  let dateDuJour: NgbDateStruct = { day: date1.getDate(), month: date1.getMonth()+1, year: date1.getFullYear()}
  console.log(date);
  let retour=null;
  if (date!==null) {
    retour= date.year*10000+date.month*100+date.day > dateDuJour.year*10000+dateDuJour.month*100+dateDuJour.day?null:{isGreaterThanToday: true};
  }
  return retour;
};

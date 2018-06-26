import {Absence} from '../model/absence';
import {typeEnum} from '../model/typeEnum';
import {statut} from '../model/EumStatu';

export class AbsencesApi {
  private _absences: Array<Absence> = [
    new Absence(1, new Date('6/15/15'), new Date('7/15/15'), typeEnum.CONGE_PAYE, statut.INITIALE),
    new Absence(2, new Date('8/15/15'), new Date('8/20/16'), typeEnum.CONGE_SANS_SOLDE, statut.EN_ATTENTE8_VALIDATION),
    new Absence(3, new Date('9/15/16'), new Date('10/15/16'), typeEnum.RTT, statut.REJETEE),
    new Absence(4, new Date('9/15/16'), new Date('10/15/16'), typeEnum.MISSION, statut.REJETEE)
  ];

  constructor() {
  }

  fetch(): Promise<Array<Absence>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this._absences);
      }, 1000);
    });
  }

  delete(absence: Absence) {
    this._absences.splice(this._absences.indexOf(absence), 1);
  }

  addAbsence(absence: Absence) {
    this._absences.push(absence);
  }
}

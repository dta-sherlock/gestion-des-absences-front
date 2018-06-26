import {typeEnum} from './typeEnum';
import {statut} from './EumStatu';

export class Absence {
  constructor(public id: Number, public dateDebut: Date, public dateFin: Date, public type: typeEnum, public statut: statut) {
  }
}

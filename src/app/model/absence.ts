import {typeEnum} from './typeEnum';
import {statut} from './EumStatu';

export class Absence {
  constructor(public dateDebut: Date, public dateFin: Date, public type: typeEnum, public statut: statut) {
  }
}

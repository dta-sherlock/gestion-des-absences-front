import {typeEnum} from './typeEnum';
import {statut} from './EumStatu';
import {CRUD_Enum} from './CRUD_Enum';

export class Absence {
  constructor(public dateDebut:Date,public dateFin:Date,public type:typeEnum,public statut:statut,public action:CRUD_Enum){}
}

import {FerieRtt} from './ferie_rtt';

export class Ferie extends FerieRtt {
  constructor(public id: number, public date: Date, public commentaire: string) {
    super(id, date, 'Férié', commentaire);
  }
}

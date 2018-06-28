import {FerieRtt} from './ferie_rtt';

export class Rtt extends FerieRtt {
  constructor(public id: number, public date: Date, public commentaire: string, public statut: string) {
    super(id, date, 'RTT employeur', commentaire);
  }
}

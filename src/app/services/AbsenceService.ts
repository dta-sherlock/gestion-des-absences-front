import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Absence} from '../model/absence';
import {AbsencesApi} from './absencesApi';

const API_BASE_URL:string='/';
const API_ABSENCES:string='absences';

@Injectable()
export class AbsenceService {
  constructor(private api:AbsencesApi,private http:HttpClient){}

  getAbsences(){
    return this.api.fetch();
  }

  getAbsence():Observable<Array<Absence>>{
    return<Observable<Array<Absence>>> this.http.get('${API_BASE_URL}${API_ABSENCES}');
  }

  AbsenceAsked(absence:Absence):Observable<Absence>{
    return<Observable<Absence>> this.http.post('${API_BASE_URL}${API_ABSENCES}',absence);
  }

  deleteAbsenceId(absence:Absence){
    return this.http.delete('${API_BASE_URL}${API_ABSENCES}/${absence.id}');
  }

  updateAbsence(absence:Absence){
    return this.http.put('${API_BASE_URL}${API_ABSENCES}/${absence.id}',absence);
  }
}

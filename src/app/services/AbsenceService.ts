import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Absence} from '../model/absence';
import {AbsencesApi} from './absencesApi';
import {API_ABSENCES, API_BASE_URL} from './constServices';

@Injectable()
export class AbsenceService {
  constructor(private api: AbsencesApi, private http: HttpClient) {
  }

  getAbsences(): Observable<Array<Absence>> {
    return <Observable<Array<Absence>>> this.http.get(`${API_BASE_URL}${API_ABSENCES}`);
  }

  deleteAbsenceId(absence: Absence) {
    return this.http.delete(`${API_BASE_URL}${API_ABSENCES}/${absence.id}`);
  }

  GetOneAbsence(absence: Absence): Observable<Absence> {
    return <Observable<Absence>> this.http.post(`${API_BASE_URL}${API_ABSENCES}`, absence);
  }

  updateAbsence(absence: Absence) {
    return this.http.put(`${API_BASE_URL}${API_ABSENCES}/${absence}`, absence);
  }



}

import { Injectable } from '@angular/core';
import { GlobalComponent } from '../../GlobalComponent';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CovCenPatient } from '../../Models/CovCenPatient';

@Injectable({
  providedIn: 'root'
})
export class CovcenpatientService {


  app_url = GlobalComponent.base_url+'covcenpatient/'
   
     constructor(private http : HttpClient) { }
   
     public saveCovCenPatient(covcenter : CovCenPatient):Observable<CovCenPatient> {
       return this.http.post<CovCenPatient> (`${this.app_url}`,covcenter)
     }
   
     public getAllCovCenPatients():Observable<CovCenPatient[]> {
      return this.http.get<CovCenPatient[]>(`${this.app_url}`)
    }

    public getAllCovCenPatientsByDoctorId(doc_id : number):Observable<CovCenPatient[]> {
      return this.http.get<CovCenPatient[]>(`${this.app_url}doctor/${doc_id}`)
    }
   
     public getCovCenPatientById(covcen_id : number):Observable<CovCenPatient> {
       return this.http.get<CovCenPatient>(`${this.app_url}${covcen_id}`)
     }
     public updateCovCenPatient(covcenter : CovCenPatient):Observable<CovCenPatient> {
       return this.http.put<CovCenPatient>(`${this.app_url}`,covcenter)
     }
}

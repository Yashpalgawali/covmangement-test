import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../../GlobalComponent';
import { Observable } from 'rxjs';
import { CovCenDoctor } from '../../Models/CovCenDoctor';

@Injectable({
  providedIn: 'root'
})
export class CovcendoctorService {

  app_url = GlobalComponent.base_url+'covcendoc/'
 
   constructor(private http : HttpClient) { }
 
   public saveCovCenDoctor(covcenter : CovCenDoctor):Observable<CovCenDoctor> {
     return this.http.post<CovCenDoctor> (`${this.app_url}`,covcenter)
   }
 
   public getAllCovCenDoctors():Observable<CovCenDoctor[]> {
     return this.http.get<CovCenDoctor[]>(`${this.app_url}`)
   }
 
   public getCovCenDoctorById(covcen_id : number):Observable<CovCenDoctor> {
     return this.http.get<CovCenDoctor>(`${this.app_url}${covcen_id}`)
   }
   public updateCovCenDoctor(covcenter : CovCenDoctor):Observable<CovCenDoctor> {
     return this.http.put<CovCenDoctor>(`${this.app_url}`,covcenter)
   }
}

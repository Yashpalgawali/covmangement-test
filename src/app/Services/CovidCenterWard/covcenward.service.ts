import { Injectable } from '@angular/core';
import { GlobalComponent } from '../../GlobalComponent';
import { HttpClient } from '@angular/common/http';
import { CovCenWard } from '../../Models/CovCenWard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovcenwardService {

  app_url = GlobalComponent.base_url+'covcenward/'
   
     constructor(private http : HttpClient) { }
   
     public saveCovidCenterWard(covcenward : CovCenWard):Observable<CovCenWard> {
       return this.http.post<CovCenWard> (`${this.app_url}`,covcenward)
     }
   
     public getAllCovidCenterWards():Observable<CovCenWard[]> {
       return this.http.get<CovCenWard[]>(`${this.app_url}`)
     }
   
     public getCovidCenterWardById(covcen_id : number):Observable<CovCenWard> {
       return this.http.get<CovCenWard>(`${this.app_url}${covcen_id}`)
     }
     public updateCovidCenterWard(covcenward : CovCenWard):Observable<CovCenWard> {
       return this.http.put<CovCenWard>(`${this.app_url}`,covcenward)
     }
}

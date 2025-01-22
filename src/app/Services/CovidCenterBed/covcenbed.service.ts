import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../../GlobalComponent';
import { CovCenBed } from '../../Models/CovCenBed';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovcenbedService {

  app_url = GlobalComponent.base_url+'covcenbed/'
    
      constructor(private http : HttpClient) { }
    
      public saveCovidCenterBed(covcenbed : CovCenBed):Observable<CovCenBed> {
        return this.http.post<CovCenBed> (`${this.app_url}`,covcenbed)
      }
    
      public getAllCovidCenterBeds():Observable<CovCenBed[]> {
        return this.http.get<CovCenBed[]>(`${this.app_url}`)
      }

      public getAllCovidCenterBedsByWardId(wardid : number):Observable<CovCenBed[]> {
        return this.http.get<CovCenBed[]>(`${this.app_url}ward/${wardid}`)
      }
    
      public getCovidCenterBedById(covcen_id : number):Observable<CovCenBed> {
        return this.http.get<CovCenBed>(`${this.app_url}${covcen_id}`)
      }
      public updateCovidCenterBed(covcenbed : CovCenBed):Observable<CovCenBed> {
        return this.http.put<CovCenBed>(`${this.app_url}`,covcenbed)
      }
}

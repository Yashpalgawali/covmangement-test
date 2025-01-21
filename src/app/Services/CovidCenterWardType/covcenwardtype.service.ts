import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../../GlobalComponent';
import { CovCenWardType } from '../../Models/CovCenWardType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovcenwardtypeService {

  app_url = GlobalComponent.base_url+'covcenwardtype/'
 
   constructor(private http : HttpClient) { }
 
   public saveCovidCenter(CovCenWardType : CovCenWardType):Observable<CovCenWardType> {
     return this.http.post<CovCenWardType> (`${this.app_url}`,CovCenWardType)
   }
 
   public getAllCovidCenters():Observable<CovCenWardType[]> {
     return this.http.get<CovCenWardType[]>(`${this.app_url}`)
   }
 
   public getCovidCenterById(covcen_id : number):Observable<CovCenWardType> {
     return this.http.get<CovCenWardType>(`${this.app_url}${covcen_id}`)
   }
   public updateCovidCenter(CovCenWardType : CovCenWardType):Observable<CovCenWardType> {
     return this.http.put<CovCenWardType>(`${this.app_url}`,CovCenWardType)
   }
}

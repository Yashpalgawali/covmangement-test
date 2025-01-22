import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from '../../GlobalComponent';
 import { Observable } from 'rxjs';
import CovCenWardType from '../../Models/CovCenWardType';

@Injectable({
  providedIn: 'root'
})
export class CovcenwardtypeService {

  app_url = GlobalComponent.base_url+'covcenwardtype/'
 
   constructor(private http : HttpClient) { }
 
   public saveCovidCenterWardType(covcenwardtype : CovCenWardType):Observable<CovCenWardType> {
     return this.http.post<CovCenWardType> (`${this.app_url}`,covcenwardtype)
   }
 
   public getAllCovidCenterWardTypes():Observable<CovCenWardType[]> {
     return this.http.get<CovCenWardType[]>(`${this.app_url}`)
   }
 
   public getCovidCenterWardTypeById(covcen_id : number):Observable<CovCenWardType> {
     return this.http.get<CovCenWardType>(`${this.app_url}${covcen_id}`)
   }
   public updateCovidCenterWardType(covcenwardtyp : CovCenWardType):Observable<CovCenWardType> {
     return this.http.put<CovCenWardType>(`${this.app_url}`,covcenwardtyp)
   }
}

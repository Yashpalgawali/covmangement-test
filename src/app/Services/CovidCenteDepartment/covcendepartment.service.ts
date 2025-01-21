import { Injectable } from '@angular/core';
import { GlobalComponent } from '../../GlobalComponent';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CovCenDepartment } from '../../Models/CovCenDepartment';

@Injectable({
  providedIn: 'root'
})
export class CovcendepartmentService {

   app_url = GlobalComponent.base_url+'covcendept/'
  
    constructor(private http : HttpClient) { }
  
    public saveCovidCenterDepartment(covcendept : CovCenDepartment):Observable<CovCenDepartment> {
      return this.http.post<CovCenDepartment> (`${this.app_url}`,covcendept)
    }
  
    public getAllCovidCenterDepartments():Observable<CovCenDepartment[]> {
      return this.http.get<CovCenDepartment[]>(`${this.app_url}`)
    }
  
    public getCovidCenterDepartmentById(covcen_id : number):Observable<CovCenDepartment> {
      return this.http.get<CovCenDepartment>(`${this.app_url}${covcen_id}`)
    }
    public updateCovidCenterDepartment(covcendept : CovCenDepartment):Observable<CovCenDepartment> {
      return this.http.put<CovCenDepartment>(`${this.app_url}`,covcendept)
    }
}

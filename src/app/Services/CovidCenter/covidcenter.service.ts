import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CovCenter } from '../../Models/CovCenter';
import { Observable } from 'rxjs';
import { GlobalComponent } from '../../GlobalComponent';

@Injectable({
  providedIn: 'root'
})
export class CovidcenterService {

  app_url = GlobalComponent.base_url+'covcen/'

  constructor(private http : HttpClient) { }

  public saveCovidCenter(covcenter : CovCenter):Observable<CovCenter> {
    return this.http.post<CovCenter> (`${this.app_url}`,covcenter)
  }

  public getAllCovidCenters():Observable<CovCenter[]> {
    return this.http.get<CovCenter[]>(`${this.app_url}`)
  }

  public getCovidCenterById(covcen_id : number):Observable<CovCenter> {
    return this.http.get<CovCenter>(`${this.app_url}${covcen_id}`)
  }
  public updateCovidCenter(covcenter : CovCenter):Observable<CovCenter> {
    return this.http.put<CovCenter>(`${this.app_url}`,covcenter)
  }
}

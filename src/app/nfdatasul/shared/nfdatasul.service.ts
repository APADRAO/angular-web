import { environment } from './../../../environments/environment';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NfdatasulService {
  token: any | string='';
  
  constructor(private http: HttpClient) { 
    this.token=window.localStorage.getItem('Token');
  }

   header = new HttpHeaders()
  .append('Authorization', this.token)
  .append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
  gravar(processo:any){
  return this.http.get<any>(`${environment.api}/api/GeraNFETecMatic/${processo}`, { headers: this.header });
  }
/*

  gravar(processo:any): Observable<any> {
    const headers = { 'content-type': 'application/json', 'Authorization':this.token};
    console.log(`${environment.api}/api/GeraNFETecMatic/${processo}`);
    this.http.get(`${environment.api}/api/GeraNFETecMatic/${processo}`, {'headers':headers}).subscribe(
      data=>data
    );
    
    return aa;
  }*/

  
}
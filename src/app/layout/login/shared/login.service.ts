import { environment } from './../../../../environments/environment';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Login } from './../shared/login';
//const url = 'http://dtv-br-ibroker2.us.signintra.com:9191/Authentication/';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials:true,
    observe: 'response' as 'response'
  }
  
/*
  public signinUser(user: Login): any {
    console.log('contacting server at ' + this.url + " with user data " + user + " with httpOptions " + true + "," + new HttpHeaders({ 'Content-Type': 'application/json' }) ); 
      
    let body = JSON.stringify(user);
    return this.http.post(this.url, body, this.httpOptions).catch(this.handleError);
  }
*/
  gravar(login: Login): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(login);
    console.log(body);
    var aa = this.http.post(`${environment.api}/Authentication/`, body,{'headers':headers})
    
    return aa;
  }

    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      
    };
  
  
/*
  gravar(login: Login): Observable<Login>{
    return this.http.post<Login>(url, login);
  }*/
}

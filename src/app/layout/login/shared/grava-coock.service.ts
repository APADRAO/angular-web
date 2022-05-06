import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GravaCoockService {


  constructor(private coock : CookieService) { 
    //coock.set(this.name,this.chave,this.duracao);
  }
 garava(name:string, chave:string, duracao:number){
   this.coock.set(name,chave,duracao);
 }
}

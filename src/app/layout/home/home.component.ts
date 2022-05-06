

import { General } from './shared/general';

import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, InjectionToken, OnInit } from '@angular/core';
import { LoginService } from '../login/shared/login.service';
import { GravaCoockService } from '../login/shared/grava-coock.service';
import { HttpInterceptor } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [General]
})
export class HomeComponent implements OnInit {
  listaGeneral: any | General[];
  selectedLocationId:number = 4; 
  itemRef: string="";
  
  SairClick(){
    console.log('iniciou a saida');
    window.localStorage.clear();
    console.log('apagou localStorage');
    this.router.navigate(['login']);
    console.log('Navegou para home');
  }
  onSelect(q:any) {
    console.log(q);
    
    this.router.navigate([q]);
  }
  constructor(privateformBuilder:FormBuilder, private service: LoginService, private coock:GravaCoockService, private router:Router, private Data:General ) { 
    this.listaGeneral=Data.getList()
  } 
  

  ngOnInit(): void {
  }

}

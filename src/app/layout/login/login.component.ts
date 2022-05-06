import { Router } from '@angular/router';
import { GravaCoockService } from './shared/grava-coock.service';
import { LoginService } from './shared/login.service';
import { Login } from './shared/login';
import { Component, InjectionToken} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpInterceptor } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  objct: any | Login
  
  form:any;
  ;
  
  mensagem: string ="";
  login: Login = {
    userName:'',
    pass:''
  };
  loginClick()
  {
    this.login.userName = this.form.get('email').value;
    this.login.pass = this.form.get('senha').value;
    
    
      this.service.gravar(this.login)
        .subscribe(data => {
          console.log(data);
          this.coock.garava("Token",data.authentication,1);
          window.localStorage.setItem('is.Is.Authorization',data.authentication)
          window.localStorage.setItem('Is.User',data.user)
          this.router.navigate([''])
        })     
  }
  constructor(private formBuilder:FormBuilder, private service: LoginService, private coock:GravaCoockService, private router: Router ) { 
    this.criarForm(formBuilder);
  }
  criarForm(formBuilder:FormBuilder){

    this.form = formBuilder.group({

        email: [''],

        senha: ['']

    });
  }
}

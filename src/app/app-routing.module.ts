import { NfdatasulComponent } from './nfdatasul/nfdatasul.component';

import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './layout/login/shared/auth.guard';

const routes: Routes = [
  {
  path:'', 
  component: HomeComponent, 
  
  children:[
    {path:'nfdatasul',component:NfdatasulComponent,canActivate: [AuthGuard]}

  ],
  canActivate: [AuthGuard]
  },

  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

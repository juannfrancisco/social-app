import { LoginComponent } from './../components/public/login/login.component';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../components/public/register/register.component';
import { HomeComponent } from '../components/private/home/home.component';
import { ProfileComponent } from '../components/private/profile/profile.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoacheeComponent } from './coachee-section/coachee/coachee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'coachee-profile', component: CoacheeComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CoacheeComponent]

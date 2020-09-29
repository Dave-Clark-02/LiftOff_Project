import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SiteStaffComponent } from './site-staff/site-staff.component';
import {  SiteAdminComponent } from './site-admin/site-admin.component';
import { SiteUserComponent } from './site-user/site-user.component';
import { ChallongeComponent } from './challonge/challonge.component';
import { SeatingChartComponent } from './seating-chart/seating-chart.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'user/profile' , component: ProfileComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: SiteUserComponent },
  { path: 'mod', component: SiteStaffComponent },
  { path: 'admin', component: SiteAdminComponent },
  {path: 'challonge', component: ChallongeComponent },
  {path: 'seating-chart', component: SeatingChartComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
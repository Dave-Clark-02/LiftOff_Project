import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { SiteAdminComponent } from './site-admin/site-admin.component';
import { SiteStaffComponent } from './site-staff/site-staff.component';
import { SiteUserComponent } from './site-user/site-user.component';

import {authInterceptorProviders} from './_helpers/auth.interceptor';
import { ChallongeComponent } from './challonge/challonge.component';
import { SeatingChartComponent } from './seating-chart/seating-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    SiteAdminComponent,
    SiteStaffComponent,
    SiteUserComponent,
    ChallongeComponent,
    SeatingChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

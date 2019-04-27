import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';


import { httpInterceptorProviders } from './auth/auth-interceptor';
import {UserService} from './services/user.service';
import {TokenStorageService} from './auth/token-storage.service';
import {AuthService} from './auth/auth.service';
import { TeachComponent } from './teach/teach.component';
import { TrackComponent } from './track/track.component';
import { LearnComponent } from './learn/learn.component';
import { CreateComponent } from './teach/create/create.component';

import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    TeachComponent,
    TrackComponent,
    LearnComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule, MatIconModule
  ],
  providers: [httpInterceptorProviders,UserService,TokenStorageService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';


import {httpInterceptorProviders} from './auth/auth-interceptor';
import {UserService} from './services/user.service';
import {TokenStorageService} from './auth/token-storage.service';
import {AuthService} from './auth/auth.service';
import {TeachComponent} from './teach/teach.component';
import {TrackComponent} from './track/track.component';
import {LearnComponent} from './learn/learn.component';
import {CreateComponent} from './teach/create/create.component';

import {
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule, MatDialogModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HeaderComponent} from './ui/header/header.component';
import {FooterComponent} from './ui/footer/footer.component';
import {SearchService} from './services/search.service';
import { UpdateComponent } from './teach/update/update.component';
import { MaterialComponent } from './teach/create/material/material.component';
import {ContentQuestionDialog, TopicComponent} from './teach/create/topic/topic.component';
import {NgxEditorModule} from 'ngx-editor';
import {TooltipModule} from 'ngx-bootstrap';
import { MaterialDetailComponent } from './material-detail/material-detail.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        TeachComponent,
        TrackComponent,
        LearnComponent,
        CreateComponent,
        HeaderComponent,
        FooterComponent,
        TopicComponent,
        UpdateComponent,
        MaterialComponent,
        ContentQuestionDialog,
        MaterialDetailComponent
    ],
    imports: [
        BrowserModule, BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule, ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatFormFieldModule,
        MatInputModule, MatTabsModule, MatDialogModule,
        FlexLayoutModule,
        NgxEditorModule,
        TooltipModule.forRoot()
    ],
    providers: [httpInterceptorProviders, UserService, TokenStorageService, AuthService, SearchService],
    bootstrap: [AppComponent],
    entryComponents: [ContentQuestionDialog]
})
export class AppModule {
}

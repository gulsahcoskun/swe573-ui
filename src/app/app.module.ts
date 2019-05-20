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
import {TrackComponent} from './track/track.component';
import {LearnComponent} from './learn/learn.component';

import {
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatStepperModule,
    MatRadioModule,
    MatTooltipModule,
    MatSnackBarModule, MatDividerModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HeaderComponent} from './ui/header/header.component';
import {FooterComponent} from './ui/footer/footer.component';
import {SearchService} from './services/search.service';
import {MaterialAddDialog, MaterialDeleteDialog, MaterialUpdateDialog, UpdateComponent} from './update/update.component';
import {NgxEditorModule} from 'ngx-editor';
import {TooltipModule} from 'ngx-bootstrap';
import {
    ContentResultCompletedComponent,
    ContentResultFailComponent,
    ContentResultSuccessComponent,
    KeywordDetailDialog,
    MaterialDetailComponent
} from './material-detail/material-detail.component';
import {LearnService} from './services/learn.service';
import {TeachService} from './services/teach.service';
import {
    ContentAddDialog,
    ContentDeleteDialog,
    ContentUpdateDialog,
    UpdateContentComponent
} from './update/update-content/update-content.component';
import {
    QuestionAddDialog,
    QuestionDeleteDialog,
    QuestionUpdateDialog,
    UpdateQuestionComponent
} from './update/update-question/update-question.component';
import {ChartsModule} from 'ng2-charts';
import {TrackService} from './services/track.service';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        TrackComponent,
        LearnComponent,
        HeaderComponent,
        FooterComponent,
        UpdateComponent,
        MaterialDetailComponent,
        KeywordDetailDialog, MaterialAddDialog, MaterialUpdateDialog, MaterialDeleteDialog,
        ContentResultSuccessComponent, ContentResultFailComponent, ContentResultCompletedComponent,
        UpdateContentComponent, UpdateQuestionComponent,
        ContentAddDialog,ContentUpdateDialog,ContentDeleteDialog,
        QuestionAddDialog,QuestionUpdateDialog,QuestionDeleteDialog,
    ],
    imports: [
        BrowserModule, BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule, ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatFormFieldModule,
        MatInputModule, MatTabsModule, MatDialogModule, MatSelectModule, MatOptionModule,
        MatCheckboxModule, MatStepperModule,MatRadioModule, MatIconModule, MatTooltipModule,
        MatSnackBarModule, MatDividerModule,
        FlexLayoutModule, ChartsModule,
        NgxEditorModule,
        TooltipModule.forRoot()
    ],
    providers: [httpInterceptorProviders, UserService, TokenStorageService, AuthService, SearchService,
        LearnService, TeachService, TrackService],
    bootstrap: [AppComponent],
    entryComponents: [KeywordDetailDialog,MaterialAddDialog, MaterialUpdateDialog, MaterialDeleteDialog,
        ContentResultFailComponent,ContentResultSuccessComponent, ContentResultCompletedComponent,
        ContentAddDialog,ContentUpdateDialog,ContentDeleteDialog,
        QuestionAddDialog,QuestionUpdateDialog,QuestionDeleteDialog]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {TeachComponent} from './teach/teach.component';
import {TrackComponent} from './track/track.component';
import {LearnComponent} from './learn/learn.component';
import {CreateComponent} from './teach/create/create.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'teach',
        component: TeachComponent
    },
    {
        path: 'track',
        component: TrackComponent
    },
    {
        path: 'learn',
        component: LearnComponent
    },
    {
        path: 'teach/create',
        component: CreateComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

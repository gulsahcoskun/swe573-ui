import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {TeachComponent} from './teach/teach.component';
import {TrackComponent} from './track/track.component';
import {LearnComponent} from './learn/learn.component';
import {CreateComponent} from './teach/create/create.component';
import {UpdateComponent} from './teach/update/update.component';
import {MaterialComponent} from './teach/create/material/material.component';
import {TopicComponent} from './teach/create/topic/topic.component';
import {QuestionComponent} from './teach/create/question/question.component';
import {MaterialDetailComponent} from './material-detail/material-detail.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
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
        component: TeachComponent,
        children: [
            {
                path: '',
                redirectTo: 'create',
                pathMatch: 'full'
            },
            {
                path: 'create',
                component: CreateComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'material',
                        pathMatch: 'full'
                    },
                    {
                        path: 'material',
                        component: MaterialComponent
                    },
                    {
                        path: 'content',
                        component: TopicComponent
                    },
                    {
                        path: 'question',
                        component: QuestionComponent
                    }
                ]

            },
            {
                path: 'update',
                component: UpdateComponent
            },
        ]
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
        path: 'detail/:id',
        component: MaterialDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

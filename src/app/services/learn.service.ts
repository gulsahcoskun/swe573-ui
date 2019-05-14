import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {ServiceResponse} from '../model/service-response';
import {UserProgressControl} from '../model/user-progress-control';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LearnService {

    private learnUrl = environment.apiUrl + '/learn/';


    constructor(private http: HttpClient) {
    }


    public createProgress(progress: UserProgressControl): Observable<ServiceResponse> {
        return this.http.post<ServiceResponse>(this.learnUrl + 'progress', progress, httpOptions);
    }

    public checkIsCompleted(progress: UserProgressControl): Observable<ServiceResponse> {
        return this.http.post<ServiceResponse>(this.learnUrl + 'isCompleted', progress, httpOptions);
    }


}

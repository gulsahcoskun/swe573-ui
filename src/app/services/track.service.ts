import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TokenStorageService} from '../auth/token-storage.service';
import {Observable} from 'rxjs/Observable';
import {StudentTrackData, TeacherTrackData} from '../model/track-data';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TrackService {

    private searchUrl = environment.apiUrl + '/track/';

  constructor(private http: HttpClient,private token: TokenStorageService) {
  }


    getStudentTrackData(username:string): Observable<any> {
        return this.http.get(this.searchUrl + 'student/' + username, { responseType: 'json' });
    }

    getTeacherTrackData(username:string): Observable<any> {
        return this.http.get(this.searchUrl + 'teacher/' + username, { responseType: 'json' });
    }

}

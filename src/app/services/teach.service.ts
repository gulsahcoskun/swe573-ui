import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {JwtResponse} from '../auth/jwt-response';
import {Content, Keyword, Material, Question} from '../model/material';
import {ServiceResponse} from '../model/service-response';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TeachService {
    private teachUrl = environment.apiUrl + '/teach/';


    constructor(private http: HttpClient) {
    }

    createMaterial(material: Material): Observable<ServiceResponse> {
        return this.http.post<ServiceResponse>(this.teachUrl + 'create/material/', material, httpOptions);
    }

    searchWiki(keyword: string): Observable<any> {
        return this.http.get(this.teachUrl + 'search/' + keyword, httpOptions);
    }

    createContent(content: Content, materialId: number): Observable<ServiceResponse> {
        return this.http.post<ServiceResponse>(this.teachUrl + 'create/content/' + materialId, content, httpOptions);
    }

    createQuestion(question: Question, contentId: number): Observable<ServiceResponse> {
        return this.http.post<ServiceResponse>(this.teachUrl + 'create/question/' + contentId, question, httpOptions);
    }


}

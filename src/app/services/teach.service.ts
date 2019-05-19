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

    getQuestions(id: number): Observable<any> {
        return this.http.get(this.teachUrl + 'questions/' + id, httpOptions);
    }

    updateMaterial(material: Material, id:number){
        return this.http.put<ServiceResponse>(this.teachUrl + 'update/material/' + id, material, httpOptions);
    }

    updateContent(content: Content, id:number){
        return this.http.put<ServiceResponse>(this.teachUrl + 'update/content/' + id, content, httpOptions);
    }

    updateQuestion(question: Question, id:number){
        return this.http.put<ServiceResponse>(this.teachUrl + 'update/question/' + id, question, httpOptions);
    }

    deleteMaterial(id:number){
        return this.http.delete<ServiceResponse>(this.teachUrl + 'delete/material/' + id, httpOptions);
    }

    deleteContent(id:number){
        return this.http.delete<ServiceResponse>(this.teachUrl + 'delete/content/' + id, httpOptions);
    }

    deleteQuestion(id:number){
        return this.http.delete<ServiceResponse>(this.teachUrl + 'delete/question/' + id, httpOptions);
    }

}

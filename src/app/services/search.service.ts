import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {TokenStorageService} from '../auth/token-storage.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class SearchService {

    private searchUrl = environment.apiUrl + '/search/';
    private searchCreatedBy = environment.apiUrl + '/search/createdBy/';
    private searchContents = environment.apiUrl + '/search/content/';
    private searchMaterialsUrl = environment.apiUrl + '/search/keyword/';

    constructor(private http: HttpClient,private token: TokenStorageService) {
    }

    getAllMaterialSummaries(): Observable<any> {
        return this.http.get(this.searchUrl, { responseType: 'json' });
    }

    getCreatedByMaterials(): any {
        return this.http.get(this.searchCreatedBy + this.token.getUsername(), httpOptions);
    }


    getContentsByMaterial(materialId: number): any {
        return this.http.get(this.searchContents + materialId, httpOptions);
    }

    searchMaterials(searchKey: string): any{
        return this.http.get(this.searchMaterialsUrl + searchKey, httpOptions);
    }

    getMaterialDetail(id:number): any {
        return this.http.get(this.searchUrl + 'id/'+ id, httpOptions);
    }

    getInProgressMaterials(): any {
        return this.http.get(this.searchUrl + 'inProgress/'+ this.token.getUsername(), httpOptions);
    }

    getCompletedMaterials(): any{
        return this.http.get(this.searchUrl + 'completed/'+ this.token.getUsername(), httpOptions);
    }

}

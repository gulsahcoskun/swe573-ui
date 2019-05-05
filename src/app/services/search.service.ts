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

    private searchAllUrl = environment.apiUrl + '/search/';
    private searchCreatedBy = environment.apiUrl + '/search/createdBy/';

    constructor(private http: HttpClient,private token: TokenStorageService) {
    }

    getAllMaterialSummaries(): Observable<any> {
        return this.http.get(this.searchAllUrl, { responseType: 'json' });
    }

    getCreatedByMaterials(): any {
        return this.http.get(this.searchCreatedBy + this.token.getUsername(), httpOptions);
    }

}


import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {

  private userUrl = environment.apiUrl + '/api/test/user';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

}

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { ConfigService } from '../shared/config.service';
import { LocalStorageService } from '../shared/localStorage.service';

@Injectable()
export class CallHttpService {

    constructor(
        public _http: Http,
        public _configService: ConfigService,
        public _localStorage: LocalStorageService,
    ) { }

    callPostService(body, url): Observable<Response> {
        let headers = new Headers({ 'Authorization': this._localStorage.retrieve('auth_token') });
        headers.append("Content-Type", 'application/x-www-form-urlencoded')
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, options);
    }

    callGetService(url): Observable<Response> {
    let headers = new Headers({ 'Authorization': this._localStorage.retrieve('auth_token') });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(url, options);
  }

}
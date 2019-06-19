import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Credentials } from '../credentials.component';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { ConfigService } from '../../shared/config.service';
import { LocalStorageService } from '../../shared/localStorage.service';
import { CallHttpService } from '../../shared/call-http.service';

@Injectable()
export class ResetPasswordService {

    constructor(
    private _http: Http,
    private _configService: ConfigService,
    private _localStorage: LocalStorageService,
    public _chs : CallHttpService
  ) { }

  resetPasswordHttpCall(token: String,password): Observable<Response> {
    let url = this._configService.getServerURL() + '/login/resetPassword';
    let body = 'token='+token+'&password='+password;
    return this._chs.callPostService(body, url);
  }

}

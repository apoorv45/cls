import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Credentials } from '../credentials.component';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { ConfigService } from '../../shared/config.service';
import { CallHttpService } from '../../shared/call-http.service';

@Injectable()
export class ForgotPasswordService {

  constructor(
    private _http: Http,
    private _configService: ConfigService,
    public _chs : CallHttpService
  ) { }

  forgotPasswordHttpCall(emailId: String): Observable<Response> {
    let url = this._configService.getServerURL() + '/login/forgotPassword';
    let body = 'emailId='+emailId;
    return this._chs.callPostService(body, url);
  }
}

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
export class LoginPageService {

  loggedIn: boolean = true;

  constructor(
    public _http: Http,
    public _configService: ConfigService,
    public _localStorage: LocalStorageService,
    public _chs : CallHttpService
  ) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }


  private authenticate(cred: Credentials): Observable<Response> {
    let loginURL = this._configService.getServerURL() + '/login/authenticate';
    let body = 'username=' + cred.userName + '&password=' + cred.password;
    return this._chs.callPostService(body, loginURL);
  }

  loginIn(cred: Credentials): Observable<String> {
    return this.authenticate(cred).map(res => {
      if (res.json().success) {
        this.loggedIn = true;
        this._localStorage.store('auth_token', res.json().token);
        this._localStorage.store('userDetails',res.json().userDetails);
        // console.log(this._localStorage.retrieve('auth_token'));
      }
      else {
        console.log(res.json().msg);
        this.loggedIn = true;
      }
      return res.json().msg;
    });
  }

  logout() {
    if (!!localStorage.getItem('auth_token')) {
      this._localStorage.remove('auth_token');
    }
    if (!!localStorage.getItem('userDetails')) {
      this._localStorage.remove('userDetails');
    }
    this.loggedIn = true;
  }

}

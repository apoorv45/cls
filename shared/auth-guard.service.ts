import { CanActivate, Router, CanActivateChild,  ActivatedRouteSnapshot,  RouterStateSnapshot, CanLoad} from '@angular/router';

import { Injectable } from '@angular/core';

import { LoginPageService } from '../login/login-page/login-page.service';
import { LocalStorageService } from "../shared/localStorage.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _lps: LoginPageService,
    private router: Router,
    private _localStorage: LocalStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // console.log('Can Activated');
    //let url = state.url;
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this._lps.loggedIn) { return true; }
    this.router.navigate(['/login']);
    return false;
  }
}
export const authProviders = [AuthGuard];
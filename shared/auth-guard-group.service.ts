import { Injectable } from '@angular/core';
import { CanActivate,Route, Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import {UnauthorizedComponent} from '../unauthorized/unauthorized.component'
import { LoginPageService } from '../login/login-page/login-page.service';
import { LocalStorageService } from "../shared/localStorage.service";

@Injectable()
export class AuthGuardGroupService implements CanLoad {

  constructor(
    private _lps: LoginPageService,
    private router: Router,
    private _localStorage: LocalStorageService,
    public dialog: MdDialog
  ) { }

  canLoad(route: Route): boolean {
    // console.log('Can Activated');
    //let url = state.url;
    let groups = this._localStorage.retrieve('userDetails').groups;
    if (groups == 'admin') { 
      return true; 
    }
    else { 
      this.dialog.open(UnauthorizedComponent);  
      return false; 
    }
  }

}

export const authGroupProviders = [AuthGuardGroupService];
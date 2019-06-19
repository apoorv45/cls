import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params, } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { LoginPageService } from '../login/login-page/login-page.service';
import { LocalStorageService } from '../shared/localStorage.service';
import { Http } from '@angular/http';
import { MdButton } from '@angular/material';
import { SearchResultsService } from './search-page/search-page.service';
// import { ViewFavouriteComponent } from './saveAsFavourite/viewfavourite/viewfavourite.component';
import { ChangePasswordComponent } from './settings/change-password/change-password.component';
import {  ViewInformationComponent} from './settings/view-information/view-information.component';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']

})
export class HomeComponent {
    private title: String;
    user;
    private projectName;
    private searchObj = {};

    constructor(
        private _lps: LoginPageService,
        private router: Router,
        private _activatedRouter: ActivatedRoute,
        private _localStorage: LocalStorageService,
        private _srs: SearchResultsService,
        private dialog: MdDialog
    ) {
        
    }
    ngOnInit() {
        this._activatedRouter.params.forEach((params: Params) => {
            this.projectName = params['project_name'];
        });
        this.user = this._localStorage.retrieve('userDetails');
        // console.log(this.user);
    }

    logout() {
        this._lps.logout();
        this.router.navigate(['./login']);
    }

    home() {
        this.router.navigate(['./home/profiles']);
    }
    search() {
        this._srs.search(this.searchObj);
    }
    // viewfavorite() {
    //     this.dialog.open(ViewFavouriteComponent);
    // }
    adminPanel() {
        this.router.navigate(['./home/adminPanel']);
    }
    changePassword() {
        this.dialog.open(ChangePasswordComponent);
    }
    viewInformation(){
        this.dialog.open(ViewInformationComponent);
    }

    createProfile(){
        this.router.navigate(['./home/family/createFamily']);
    }

    searchProfile(){
        this.router.navigate(['./home/searchProfile/*:*']);
    }

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../credentials.component';
import { LoginPageService } from './login-page.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  loading: boolean = false;
  alert: boolean = false;
  message;
  constructor(
    private _lps: LoginPageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cred = new Credentials();
  login() {
    this.loading = true;
    this._lps.loginIn(this.cred).subscribe(
      msg => {
        if (this._lps.loggedIn) {
          this.alert = true;
          //this.router.navigate(['./home']);
          this.router.navigate(['./home/searchProfile/*:*']);
        } else {
          this.cred.userName = '';
          this.cred.password = '';
          this.message = msg;
          
          this.alert = false;
        }
      },
      err => { 
        this.loading = false; 
        console.log(err);
        this.alert = true;
        this.message = 'Connection Error';

      },
      () => {this.loading = true;}
    );
  }
  forgotPassword() {
    this.router.navigate(['./login/forgotPassword']);
  }

}

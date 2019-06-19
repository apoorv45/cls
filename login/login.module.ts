import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';
import { LoginPageModule } from './login-page/login-page.module';



@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule,
        loginRouting,
        MaterialModule.forRoot(),
        ReactiveFormsModule,
        LoginPageModule
        
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
    ]
})
export class LoginModule {

}
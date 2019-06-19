import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './login-page.component';
import { LoginPageService } from "./login-page.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        ReactiveFormsModule,
    ],
    declarations: [
        LoginPageComponent
    ],
    providers: [
        LoginPageService
    ]
})
export class LoginPageModule {

}
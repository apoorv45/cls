import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { ResetPasswordComponent } from './reset-password.component';
import { ResetPasswordService } from "./reset-password.service";
import { ResetPasswordRouting } from "./reset-password.routing";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        ReactiveFormsModule,
        ResetPasswordRouting
    ],
    declarations: [
        ResetPasswordComponent
    ],
    providers: [
        ResetPasswordService
    ]
})
export class ResetPasswordModule {

}
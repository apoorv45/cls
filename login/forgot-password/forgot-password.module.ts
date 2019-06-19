import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { ForgotComponent } from './forgot-password.component';
import { ForgotPasswordService } from "./forgot-password.service";
import { ForgotPasswordRouting } from "./forgot-password.routing";

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        ReactiveFormsModule,
        ForgotPasswordRouting,
        CommonModule
    ],
    declarations: [
        ForgotComponent
    ],
    providers: [
        ForgotPasswordService
    ]
})
export class ForgotPasswordModule {

}
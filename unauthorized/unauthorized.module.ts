import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { UnauthorizedComponent } from './unauthorized.component';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule,
        MaterialModule.forRoot(),
        ReactiveFormsModule,
    ],
    declarations: [
        UnauthorizedComponent
    ],
    providers: [
    ],
    entryComponents: [
        UnauthorizedComponent
    ]
})
export class UnauthorizedModule {

}
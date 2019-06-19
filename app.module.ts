import { NgModule , APP_INITIALIZER }  from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { LoginModule }  from './login/login.module';

import { routing } from './app.routing';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent }         from './app.component';

import {authProviders} from './shared/auth-guard.service';
import {AuthGuardGroupService} from './shared/auth-guard-group.service';
import {LocalStorageService} from './shared/localStorage.service';
import {ConfigService} from './shared/config.service';
import {CallHttpService} from './shared/call-http.service';
import { UnauthorizedModule } from './unauthorized/unauthorized.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    routing,
    //AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    UnauthorizedModule
  ],
  declarations: [
    AppComponent,

  ],
  entryComponents: [
  ],
  providers: [
    authProviders,
    AuthGuardGroupService,
    CallHttpService,
    ConfigService,
    LocalStorageService,
        {
      provide: APP_INITIALIZER,
      //useFactory: (config:ConfigService) => () => config.load(),
      useFactory: ConfigServiceFn,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

export function ConfigServiceFn(config:ConfigService)
{
  return () => config.load();
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
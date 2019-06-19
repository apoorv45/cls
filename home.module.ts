import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MdDialog,MaterialModule } from '@angular/material';
import { DataTableModule } from "angular2-datatable";
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Ng2PaginationModule } from 'ng2-pagination';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { AlertModule } from 'ng2-bootstrap/alert';
import { CollapseModule } from 'ng2-bootstrap/collapse';

// import {SaveAsFavourite} from './saveAsFavourite/saveAsFavourite.module';
import {SearchPageModule} from './search-page/search-page.module';
// import {ProfilesModule} from './profiles/profiles.module';

import { homeRouting } from './home.routing';
import{SettingsModule} from './settings/settings.module';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
    imports: [
        FormsModule,
        CollapseModule,
        Ng2DropdownModule,
        DataTableModule,
        HttpModule,
        CommonModule,
        homeRouting,
        ChartsModule,
        AlertModule.forRoot(),
        DatepickerModule.forRoot(),
        PaginationModule.forRoot(),
        Ng2PaginationModule,
        ReactiveFormsModule,
        MaterialModule.forRoot(),
        // SaveAsFavourite,
        SearchPageModule,
        SettingsModule,
        // ProfilesModule
    ],
    declarations: [
        HomeComponent,
        HomePageComponent
    ],
    providers: [
    ],
    entryComponents: [
    ]
})
export class HomeModule {

}
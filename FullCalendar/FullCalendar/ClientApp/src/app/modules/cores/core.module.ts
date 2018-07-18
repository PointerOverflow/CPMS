import * as $ from 'jquery';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FullCalendarModule } from 'ng-fullcalendar';

@NgModule({
    declarations: [
       
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpModule,
        FullCalendarModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpModule,
        FullCalendarModule
    ]
})

export class CoreModule { }

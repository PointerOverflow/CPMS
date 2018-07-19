import * as $ from 'jquery';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FullCalendarModule } from 'ng-fullcalendar';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

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
        FullCalendarModule,
        ModalModule.forRoot(),
        TabsModule.forRoot()
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpModule,
        FullCalendarModule,
        ModalModule,
        TabsModule
    ]
})

export class CoreModule { }

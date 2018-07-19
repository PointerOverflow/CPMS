import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { EventService } from './modules/cores/services';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  @ViewChild('childModal') childModal: ModalDirective;
  @ViewChild('reasonModal') reasonModal: ModalDirective;

  title = 'Calendar';
  calendarOptions: Options;
  displayEvent: any;
  selectedTask = '';

  constructor(
    protected eventService: EventService
  ) {
    setTheme('bs4');
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data
      };
    });
  }
  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    this.showChildModal();
    
    this.selectedTask = `<b>Maintenance Plan</b>: ${model.event.code}<br>
                         <b>PM Task detail:</b><br>
                         ${model.event.description}`;

    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    this.showReasonModal();
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }

  showChildModal(): void {
    this.childModal.show();
  }
 
  hideChildModal(): void {
    this.childModal.hide();
  }

  showReasonModal(): void {
    this.reasonModal.show();
  }
 
  hideReasonModal(): void {
    this.reasonModal.hide();
  }
}

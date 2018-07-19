import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
@Injectable()
export class EventService {
  public getEvents(): Observable<any> {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    // let data: any = [{
    //   title: 'All Day Event',
    //   start: yearMonth + '-01'
    // },
    // {
    //   title: 'Long Event',
    //   start: yearMonth + '-07',
    //   end: yearMonth + '-10'
    // },
    // {
    //   id: 999,
    //   title: 'Repeating Event',
    //   start: yearMonth + '-09T16:00:00'
    // },
    // {
    //   id: 999,
    //   title: 'Repeating Event',
    //   start: yearMonth + '-16T16:00:00'
    // },
    // {
    //   title: 'Conference',
    //   start: yearMonth + '-11',
    //   end: yearMonth + '-13'
    // },
    // {
    //   title: 'Meeting',
    //   start: yearMonth + '-12T10:30:00',
    //   end: yearMonth + '-12T12:30:00'
    // },
    // {
    //   title: 'Lunch',
    //   start: yearMonth + '-12T12:00:00'
    // },
    // {
    //   title: 'Meeting',
    //   start: yearMonth + '-12T14:30:00'
    // },
    // {
    //   title: 'Happy Hour',
    //   start: yearMonth + '-12T17:30:00'
    // },
    // {
    //   title: 'Dinner',
    //   start: yearMonth + '-12T20:00:00'
    // },
    // {
    //   title: 'Birthday Party',
    //   start: yearMonth + '-13T07:00:00'
    // },
    // {
    //   title: 'Click for Google',
    //   url: 'http://google.com/',
    //   start: yearMonth + '-28'
    // }];

    let data: any = [{
      code: '610000004031',
      title: '610000004031 \n 2W - ME Peeker & Slicer Zone(P12)',
      description: '2W - ME Peeker & Slicer Zone(P12)',
      start: yearMonth + '-02',
      color: 'red'
    },
    {
      code: '342257',
      title: '342257 \n 1W - ME Flavoring Zone(P17)',
      description: '1W - ME Flavoring Zone(P17)',
      start: yearMonth + '-07',
      color: 'green',
      editable: false
    },
    {
      code: '610000004023',
      title: '610000004023 \n 6M - ME Potato Loading Zone(P10)',
      description: '6M - ME Potato Loading Zone(P10)',
      start: yearMonth + '-11',
      color: '#007bff'
    },
    {
      code: '342257',
      title: '342257 \n 1W - ME Flavoring Zone(P17)',
      description: '1W - ME Flavoring Zone(P17)',
      start: yearMonth + '-28',
      color: '#007bff'
    },
    {
      code: '610000004068',
      title: '610000004068 \n 1W - ME Fryer Zone(P15)',
      description: '1W - ME Fryer Zone(P15)',
      start: yearMonth + '-28',
      color: '#007bff'
    }];

    return Observable.of(data);
  }
};

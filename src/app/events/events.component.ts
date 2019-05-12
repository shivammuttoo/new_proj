import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventService]
})
export class EventsComponent implements OnInit {

  public events = [];
  currentDate = new Date();
  currDate = new NgbDate(
    this.currentDate.getFullYear(),
    this.currentDate.getMonth() + 1 ,
    this.currentDate.getDate());

  constructor(private eventService: EventService) { }

  ngOnInit() {
    const currentDate = new Date();
    this.getEevents();
    console.log(this.events);
  }
  getEevents() {
    this.events = this.eventService.events.filter((date) => {
      return this.currDate.equals(new NgbDate(date.date.year, date.date.month, date.date.day) ) ? true : false;
     });
     console.log(this.events);
  }
}

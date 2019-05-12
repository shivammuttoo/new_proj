import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { NgbDateAdapter, NgbDateStructAdapter } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css'],
  providers: [EventService, NgbDateStructAdapter]
})
export class PastComponent implements OnInit {
  public events = [];
  currentDate = new Date();
  currDate = new NgbDate(
    this.currentDate.getFullYear(),
    this.currentDate.getMonth() + 1 ,
    this.currentDate.getDate());
  constructor(private eventService: EventService, private ngbCalendar: NgbCalendar,
    private ngbDateAdapter: NgbDateStructAdapter) { }

  ngOnInit() {
    this.getEevents();
  }
  reSchedule(selectedDate,id ) {
    console.log(selectedDate);
    // console.log(this.eventService.events.find((elem) => elem.id === id));
    this.getEevents();
  }
  getEevents() {
    this.events = this.eventService.events.filter((date) => {
      return this.currDate.after(new NgbDate(date.date.year, date.date.month, date.date.day) ) ? true : false;
     });
     console.log(this.events);
  }

}

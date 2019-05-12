import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
  providers: [EventService,  NgbModal]
})
export class UpcomingComponent implements OnInit {
  public events = [];
  currentDate = new Date();
  currDate = new NgbDate(
    this.currentDate.getFullYear(),
    this.currentDate.getMonth() + 1 ,
    this.currentDate.getDate());
    modalDescription: String = '';
  constructor(private eventService: EventService,
    private modalService: NgbModal) { }

  ngOnInit() {
    const currentDate = new Date();
    this.getEevents();
    console.log(this.events);
  }
  getEevents() {
    this.events = this.eventService.events.filter((date) => {
      return this.currDate.before(new NgbDate(date.date.year, date.date.month, date.date.day) ) ? true : false;
     });
     console.log(this.events);
  }
  open(content, description) {
    this.modalDescription = description;
    this.modalService.open(content);
  }

}

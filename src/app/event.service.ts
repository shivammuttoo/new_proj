import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import events from './events';
@Injectable()
export class EventService {
  events = events;
  constructor() {
   }
   getEvents() {
    return this.events;
   }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { HeaderComponent } from './header/header.component';
import Route from './routes';
import { EventsComponent } from './events/events.component';
import { PastComponent } from './past/past.component';
import { LiveComponent } from './live/live.component';
import {EventService} from './event.service';
import { TimeAgoPipe } from './time-ago.pipe';
import {NgbDatepickerModule, NgbModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UpcomingComponent,
    HeaderComponent,
    EventsComponent,
    PastComponent,
    LiveComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Route),
    NgbModule.forRoot(),
    NgbDatepickerModule,
    FormsModule,
    NgbModalModule.forRoot()
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }

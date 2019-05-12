import {Routes} from '@angular/router';
import { UpcomingComponent } from './upcoming/upcoming.component';
import {EventsComponent} from './events/events.component';
import {PastComponent} from './past/past.component';
import { LiveComponent } from './live/live.component';
const Route: Routes = [
    { path: "", redirectTo: "/upcoming?from=blank", pathMatch: "full" },
    {
     path: 'upcoming',
     component: UpcomingComponent,
    },
    {
        path : 'past',
        component: PastComponent
    },
    {
        path: 'live',
        component: LiveComponent
    }

];
export default Route;

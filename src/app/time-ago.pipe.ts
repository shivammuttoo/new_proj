import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const currentTime = new Date();
    const givenTime = new Date(value.month + '-' + value.day + '-' + value.year  );
    const days = ((((givenTime.getTime() - currentTime.getTime()) / 1000)/ 60)/60)/24;
    console.log(days);
    return Math.round(days) > 0 ? Math.round(days) + ' day(s) left': Math.round(days) + ' day(s) ago';
  }

}

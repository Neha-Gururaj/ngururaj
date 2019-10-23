import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import {Report} from '../../report'

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  post_result : string = '200OK'

  rfcs: Array<object> = [ new Report('19-Jul-19 10:30', '', '', '3-9FAT420', '', '', 'Completed', ''), 
                          new Report('19-Jul-19 10:30', '', '', '3-9HSBWXA', '', '', 'Completed', ''),
                          new Report('19-Jul-19 10:30', '', '', '3-9GP2ZNB', '', '', 'Completed', ''),
                          new Report('19-Jul-19 10:30', '', '', '3-9GL9REY', '', '', 'Completed', ''),
                          new Report('19-Jul-19 10:30', '', '', '3-9GL9RNN', '', '', 'Completed', ''),
                          new Report('19-Jul-19 10:30', '', '', '3-9HBOFGT', '', '', 'Completed', ''),
                          new Report('19-Jul-19 10:30', '', '', '3-9EC69QF', '', '', 'Completed', ''),
                          new Report('19-Jul-19 10:30', '', '', '3-9HGUANL', '', '', 'Completed', '') ];

  get() {
    return of(this.rfcs);
  }
  post() {
    return of(this.post_result)
  }

  constructor() { }
}

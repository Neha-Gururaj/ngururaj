import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassReportDetailsService {
  // private messageSource = new Subject<string>();
  // currentMessage = this.messageSource.asObservable();
  // constructor() { }
  // changeMessage(message: string) {
  //   this.messageSource.next(message);
  // }
  
  public passedData_date;
  public passedData_category;
  public passedData_description;
  public passedData_rfc;
  public passedData_duedate;
  public passedData_time;
  public passedData_status;
  public passedData_notes;
}

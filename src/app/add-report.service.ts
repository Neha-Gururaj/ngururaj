import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from './report';

@Injectable({
  providedIn: 'root'
})
export class AddReportService {
  _url = 'http://127.0.0.1:3000/addReport';
  constructor(private _http: HttpClient) { }

  addReport(newReport: Report) {
    return this._http.post<any>(this._url, newReport);
  }
  public passedData_date;
  public passedData_category;
  public passedData_description;
  public passedData_rfc;
  public passedData_duedate;
  public passedData_time;
  public passedData_status;
  public passedData_notes;
}

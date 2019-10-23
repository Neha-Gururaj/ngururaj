import { Component, OnInit } from '@angular/core';
import { Report } from '../report';
import { PassReportDetailsService } from '../pass-report-details.service';

@Component({
  selector: 'app-my-detailed-report',
  templateUrl: './my-detailed-report.component.html',
  styleUrls: ['./my-detailed-report.component.scss']
})
export class MyDetailedReportComponent implements OnInit {
  date = this.passingData.passedData_date;
  category = this.passingData.passedData_category;
  description = this.passingData.passedData_description;
  rfc = this.passingData.passedData_rfc;
  duedate = this.passingData.passedData_duedate;
  time = this.passingData.passedData_time;
  status = this.passingData.passedData_status;
  notes = this.passingData.passedData_notes;
  constructor(public passingData: PassReportDetailsService) { }

  ngOnInit() {
  }

}

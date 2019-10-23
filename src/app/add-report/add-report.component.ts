import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Report } from '../report';
import { AddReportService } from '../add-report.service';
import { PassReportDetailsService } from '../pass-report-details.service';
// import { Router } from '@an'
import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent  implements OnInit {
  status = ['Completed', 'In Progress', 'On Hold/Skipped'];
  addNewReport = new Report('', '', '', '', '', '', '', '');
  message:string="";
  // myname = "Neha";
  // @Output() childEvent = new EventEmitter();
  constructor( private _router:Router, public passingData: PassReportDetailsService) { }

  ngOnInit() {
    
  }
  onSubmit(){
    // console.log(this.addNewReport);
    this.passingData.passedData_date = this.addNewReport.date;
    this.passingData.passedData_category = this.addNewReport.category;
    this.passingData.passedData_description = this.addNewReport.description;
    this.passingData.passedData_rfc = this.addNewReport.rfc;
    this.passingData.passedData_duedate = this.addNewReport.dueDate;
    this.passingData.passedData_time = this.addNewReport.time;
    this.passingData.passedData_status = this.addNewReport.status;
    this.passingData.passedData_notes = this.addNewReport.notes;
    this._router.navigate(['viewMyReport']);
    // console.log("Testing");
    
    // this._addReport.addReport(this.addNewReport)
    // .subscribe(
    //   data => console.log('Success!', data),
    //   error => console.error('Error!', error)
    // )
    // this.childEvent.emit(this.addNewReport.status); 
    // this.childEvent.emit(this.myname);
  }

  // print(){
  //   console.log("Test log");
    
  // }

}

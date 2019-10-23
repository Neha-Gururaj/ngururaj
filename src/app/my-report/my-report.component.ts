import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { PassReportDetailsService } from '../pass-report-details.service';
import { ReportsService } from '../services/getreport/reports.service';
import moment from 'moment';
import { Router } from '@angular/router'; 
import { Report } from '../report';
import { Subject } from 'rxjs';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AddReportService} from '../add-report.service';
import {DatePipe} from '@angular/common';
// import { ReceiveDataService } from '../receive-data.service';
import '../../assets/userData.json';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-my-report',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './my-report.component.html',
  styleUrls: ['./my-report.component.scss']
})
export class MyReportComponent implements OnInit {
  ticket_status = ['Assigned', 'Completed', 'In Progress', 'On Hold/Skipped'];
  categories = ['A', 'B', 'C'];
  closeResult: string;
  submitted = false;
  // array to hold dummy data
  userData:any [] = [];
  // container for mock data
  mock_containers_mon = [];
  mock_containers_tue = [];
  mock_containers_wed = [];
  mock_containers_thur = [];
  mock_containers_fri = [];
  mock_containers_sat = [];
  mock_containers_sun = [];
  // creating a new instance
  newReport = new Report('','','','','','','','');
  // creating an empty array
  containers_mon = [];
  containers_tue = [];
  containers_wed = [];
  containers_thur = [];
  containers_fri = [];
  containers_sat = [];
  containers_sun = [];

  report_date;
  report_time;
  report_due;
  report_category;
  report_status;
  report_notes
  report_rfc;
  report_description;
  format_day;
  day;
  rfc_data: Array<object>
  post_result: string="";
  day_of_the_week = "";
  mock_date = [];
  mock_category = [];
  mock_description = [];
  mock_rfc = [];
  mock_due = [];
  mock_time = [];
  mock_status = [];
  mock_status_completed = [];
  mock_status_inprogress = [];
  mock_status_onhold = [];
  mock_status_assigned = [];
  mock_notes = [];
  mock_day = [];
  use_day = [];
  mock_completed_number;
  mock_inprogress_number;
  mock_onhold_number;
  mock_assigned_number;
  //for pie-chart
  title = '';
  type = 'PieChart';
  data = [
    ['Completed', this.mock_completed_number],
    ['In Progress', this.mock_inprogress_number],
    ['On Hold/Skipped', this.mock_onhold_number],
    ['Assigned', this.mock_assigned_number]
  ];
  columnNames = ['Status', 'Number'];
  options = {
    colors: ['#95b89d', '#dfd770', '#ee6262', '#e2d9d9']
  };
  width = 550;
  height = 400;
  

  status = this.passingData.passedData_status;
  constructor(public passingData: PassReportDetailsService, private reportservices: ReportsService, private _router:Router, private modalService: NgbModal, private _addnewreport: AddReportService, private _http:HttpClient) { 
    console.log(this.passingData.passedData_status);
    
   }
   onClick() {
    this._router.navigate(['detailedReport']);
   }
   open(add_report){
    this.modalService.open(add_report, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
   }

   open_rep(view_details) {
    this.modalService.open(view_details, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
   }
   
   private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  onSubmit() {
    
    this.submitted = true;
    this.report_date = this.newReport.date;
    this.report_status = this.newReport.status;
    this.report_category = this.newReport.category;
    this.report_due = this.newReport.dueDate;
    this.report_time = this.newReport.time;
    this.report_notes = this.newReport.notes;
    this.report_rfc = this.newReport.rfc;
    this.report_description = this.newReport.description;
    this.format_day = moment(this.report_date, 'YYYY-MM-DD');
    this.day = this.format_day.format('dddd');
    
    if( this.day === 'Monday' ) {
      this.containers_mon.push(this.containers_mon.length);
    }
    else if( this.day === 'Tuesday') {
      this.containers_tue.push(this.containers_tue.length);
    }
    else if (this.day === 'Wednesday') {
      this.containers_wed.push(this.containers_wed.length);
    }
    else if (this.day === 'Thursday') {
      this.containers_thur.push(this.containers_thur.length);
    }
    else if (this.day === 'Friday') {
      this.containers_fri.push(this.containers_fri.length);
    }
    else if(this.day === 'Saturday') {
      this.containers_sat.push(this.containers_sat.length);
    }
    else {
      this.containers_sun.push(this.containers_sun.length);
    }
    this._addnewreport.addReport(this.newReport)
      .subscribe(
        data => console.log('Data sent to server', data),
        error => console.log('Data was not sent', error)
      )
  }
  
  ngOnInit() {
      
    
    this._http.get('../../assets/userData.json').subscribe(
      data => {
        this.userData = data as string [];
        
        for(let i=0; i<=this.userData.length;i++) {
          // console.log(this.userData[i].rfc);
          this.mock_date[i] = moment(this.userData[i].date, 'DD/MM/YYYY');
          this.mock_day[i] = this.mock_date[i].format('dddd');
          this.mock_status[i] = this.userData[i].status;
          if( this.mock_day[i] === 'Monday') {
            this.mock_containers_mon.push(this.mock_containers_mon.length);
          }
          else if( this.mock_day[i] === 'Tuesday') {
            this.mock_containers_tue.push(this.mock_containers_tue.length);
          }
          else if ( this.mock_day[i] === 'Wednesday') {
            this.mock_containers_wed.push(this.mock_containers_wed.length);
          }
          else if ( this.mock_day[i] === 'Thursday') {
            this.mock_containers_thur.push(this.mock_containers_thur.length);
          }
          else if ( this.mock_day[i] === 'Friday') {
            this.mock_containers_fri.push(this.mock_containers_fri.length);
          }
          else if ( this.mock_day[i] === 'Saturday') {
            this.mock_containers_sat.push(this.mock_containers_sat.length);
          }
          else {
            this.mock_containers_sun.push(this.mock_containers_sun.length);
          }

          // break;
        }
        
        // for(let i=0; i<=this.userData.length;i++) {
          
        //   if (this.mock_status[i] === 'Completed') {
        //     this.mock_status_completed[i] = this.mock_status[i];
        //     // console.log(this.mock_status_completed[i]);
        //   }
        //   else if (this.mock_status[i] === 'In Progress') {
        //     this.mock_status_inprogress[i] = this.mock_status[i];
        //   }
        //   else if (this.mock_status[i] === 'On Hold/Skipped') {
        //     this.mock_status_onhold[i] = this.mock_status[i];
        //   }
        //   else {
        //     this.mock_status_assigned[i] = this.mock_status[i];
        //   }
        //   break;
        // }
        // this.mock_completed_number = this.mock_status_completed.length;
        // this.mock_inprogress_number = this.mock_status_inprogress.length;
        // this.mock_onhold_number = this.mock_status_onhold.length;
        // this.mock_assigned_number = this.mock_status_assigned.length;
      }
    )
  }
  
}

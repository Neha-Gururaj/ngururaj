import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddReportComponent } from './add-report/add-report.component';
import { MyReportComponent } from './my-report/my-report.component';
import { TeamReportComponent } from './team-report/team-report.component'; 
import { MyDetailedReportComponent } from './my-detailed-report/my-detailed-report.component';
import { AssignTasksComponent } from './assign-tasks/assign-tasks.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  {path: 'addReport', component: AddReportComponent},
  {path: 'viewMyReport', component: MyReportComponent},
  {path:'detailedReport', component: MyDetailedReportComponent},
  {path: 'viewTeamReport', component: TeamReportComponent},
  {path: 'assignTasks', component: AssignTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

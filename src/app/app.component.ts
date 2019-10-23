import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened = false;
  name: string = 'Neha Gururaj'
  email: string = 'neha.gururaj@oracle.com'
  title = 'Weekly-Report';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  numberOfCustomers: number = 567;
  numberOfItems: number = 23;
  isHidden: boolean = false;

  toggleButtonAction():void {
    this.isHidden = !this.isHidden;
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  numberOfCustomers: number = 567;
  numberOfItems: number = 23;
  isHidden: boolean = false;

  ngOnInit() {
    // alert('dashboard just loaded!');
  }

  toggleButtonAction():void {
    this.isHidden = !this.isHidden;
  }
}

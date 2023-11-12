import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customersData: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
      this.getAll();
  }

  getAll() {
    this.customerService.get().subscribe((result: any) => {
      this.customersData = result.data;
    });
  }

}

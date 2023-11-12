import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';
import { Customer } from './customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  @ViewChild('customerForm') customerForm!: NgForm;

  customersData: any;

  customer: Customer = {
    id: 0,
    name: '',
    address: '',
    tel: ''
  }

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.get().subscribe((result: any) => {
      this.customersData = result.data;
    });
  }

  saveCustomer() {
    this.customerService.create(this.customer).subscribe((result: any) => {
      this.customerForm.reset();
      this.getAll();
    });
  }

}

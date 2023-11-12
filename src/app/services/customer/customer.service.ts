import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL = 'http://localhost:3000/api/customers';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.URL);
  }
  
  create(customer: Customer): any{
    return this.http.post(this.URL, customer);
  }
}

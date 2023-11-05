import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CustomerComponent} from "./customer/customer.component";

const routes: Routes = [
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path: 'customer', component: CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeafultComponent} from "./layout/deafult/deafult.component";
import {DashboardComponent} from "./nav-content/dashboard/dashboard.component";
import {OrdersComponent} from "./nav-content/orders/orders.component";
import {CustomersComponent} from "./nav-content/customers/customers.component";
import {ProductsComponent} from "./nav-content/products/products.component";
import {CapturePriceComponent} from "./nav-content/capture-price/capture-price.component";
import {SalesExecutiveComponent} from "./nav-content/sales-executive/sales-executive.component";


const routes: Routes = [{
  path : '',
  component: DeafultComponent,
  children: [{
    path: '',
    component: DashboardComponent,
  }, {
    path: 'orders',
    component: OrdersComponent,
  }, {
    path: 'customers',
    component: CustomersComponent,
  }, {
    path: 'products',
    component: ProductsComponent,
  }, {
    path: 'sales-executive',
    component: SalesExecutiveComponent,
  },{
    path:'capture-price',
    component: CapturePriceComponent
  }]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

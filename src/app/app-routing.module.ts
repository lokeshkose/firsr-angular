import { EditsmComponent } from './nav-content/sales-executive/editsm/editsm.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeafultComponent} from "./layout/deafult/deafult.component";
import {DashboardComponent} from "./nav-content/dashboard/dashboard.component";
import {OrdersComponent} from "./nav-content/orders/orders.component";
import {CustomersComponent} from "./nav-content/customers/customers.component";
import {ProductsComponent} from "./nav-content/products/products.component";
import {CapturePriceComponent} from "./nav-content/capture-price/capture-price.component";
import {SalesExecutiveComponent} from "./nav-content/sales-executive/sales-executive.component";
import {EdituserComponent} from "./nav-content/customers/edituser/edituser.component";
import {UserdashboardComponent} from "./nav-content/customers/userdashboard/userdashboard.component";
import {ParentcategoriesComponent} from "./nav-content/products/parentcategories/parentcategories.component";
import {CornchipsComponent} from "./nav-content/products/parentcategories/cornchips/cornchips.component";
import {ParasboxComponent} from "./nav-content/products/parentcategories/cornchips/parasbox/parasbox.component";
import {ProductComponent} from "./nav-content/products/parentcategories/cornchips/parasbox/product/product.component";
import {Edituser1Component} from "./nav-content/customers/edituser1/edituser1.component";
import {Userdashboard1Component} from "./nav-content/customers/userdashboard1/userdashboard1.component";
import {WashimorderComponent} from "./nav-content/orders/washimorder/washimorder.component";

import { UserdashboardsmComponent } from './nav-content/sales-executive/userdashboardsm/userdashboardsm.component';

import {SweetComponent} from "./nav-content/products/sweet/sweet.component";
import {PuffsComponent} from "./nav-content/products/puffs/puffs.component";
import {PotatoComponent} from "./nav-content/products/potato/potato.component";
import {PelletsComponent} from "./nav-content/products/pellets/pellets.component";
import {NaksComponent} from "./nav-content/products/naks/naks.component";
import {HiphopComponent} from "./nav-content/products/sweet/hiphop/hiphop.component";
import {ChocodippsComponent} from "./nav-content/products/sweet/chocodipps/chocodipps.component";





const routes: Routes = [{
  path : '',
  component: DeafultComponent,
  children: [{
    path: '',
    component: DashboardComponent,
  }, {
    path: 'orders',children:[
      {path:'', component: OrdersComponent,},
      {path: 'washimorder', component: WashimorderComponent}
    ]},

    {path: 'customers', children:[
        {path:'', component: CustomersComponent,},
      { path: 'edituser', component: EdituserComponent},
      { path: 'edituser1', component: Edituser1Component},
      {path: 'userdashboard', component: UserdashboardComponent,},
      {path: 'userdashboard1', component: Userdashboard1Component,}
    ]},
    {path: 'products', children:[
      {path:'', component: ProductsComponent,},
      { path: 'sweet', children:[
        {path:'', component:SweetComponent},
        {path: 'hiphop', component:HiphopComponent},
        {path:'chocodipps',component:ChocodippsComponent}
      ]},
      { path: 'puffs', component: PuffsComponent},
      { path: 'potato', component: PotatoComponent},
      { path: 'pellets', component: PelletsComponent},
      { path: 'naks', component: NaksComponent},
    ]},

    {path: 'products/parentcategories', children:[
      {path:'', component: ParentcategoriesComponent,},
      { path: 'cornchips', component: CornchipsComponent},

    ]},
    {path: 'products/parentcategories/cornchips', children:[
      {path:'', component: CornchipsComponent,},
      { path: 'parasbox', component: ParasboxComponent},

    ]},
    {path: 'products/parentcategories/cornchips/parasbox', children:[
      {path:'', component: ParasboxComponent,},
      { path: 'product', component: ProductComponent},

    ]},



    {
      path: 'sales-executive',children:[
        {path:'', component: SalesExecutiveComponent,},
        {path: 'editsm', component: EditsmComponent},
        {path: 'userdashboard', component: UserdashboardsmComponent}
      ]},
  {
    path:'capture-price',
    component: CapturePriceComponent
  }]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

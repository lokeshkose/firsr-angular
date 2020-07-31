import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeafultComponent} from "./deafult.component";
import {DashboardComponent} from "../../nav-content/dashboard/dashboard.component";
import {OrdersComponent} from "../../nav-content/orders/orders.component";
import {CustomersComponent} from "../../nav-content/customers/customers.component";
import {SalesExecutiveComponent} from "../../nav-content/sales-executive/sales-executive.component";
import {CapturePriceComponent} from "../../nav-content/capture-price/capture-price.component";
import {RouterModule} from "@angular/router";
import {SharesModule} from "../../shares/shares/shares.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatRadioModule} from "@angular/material/radio";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";






@NgModule({
  declarations: [
    DeafultComponent,
    DashboardComponent,
    OrdersComponent,
    CustomersComponent,
    SalesExecutiveComponent,
    CapturePriceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharesModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatTableModule,
    MatSelectModule

  ]
})
export class DeafultModule { }


import { UserdashboardComponent } from './../../nav-content/customers/userdashboard/userdashboard.component';
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
import {MatInputModule} from "@angular/material/input";
import {EdituserComponent} from "../../nav-content/customers/edituser/edituser.component";
import {ParentcategoriesComponent} from "../../nav-content/products/parentcategories/parentcategories.component";
import {ProductsComponent} from "../../nav-content/products/products.component";
import {CornchipsComponent} from "../../nav-content/products/parentcategories/cornchips/cornchips.component";
import {ParasboxComponent} from "../../nav-content/products/parentcategories/cornchips/parasbox/parasbox.component";
import {ProductComponent} from "../../nav-content/products/parentcategories/cornchips/parasbox/product/product.component";
import {Edituser1Component} from "../../nav-content/customers/edituser1/edituser1.component";
import {Userdashboard1Component} from "../../nav-content/customers/userdashboard1/userdashboard1.component";
import {WashimorderComponent} from "../../nav-content/orders/washimorder/washimorder.component";
import {SweetComponent} from "../../nav-content/products/sweet/sweet.component";
import {PuffsComponent} from "../../nav-content/products/puffs/puffs.component";
import {PotatoComponent} from "../../nav-content/products/potato/potato.component";
import {PelletsComponent} from "../../nav-content/products/pellets/pellets.component";
import {NaksComponent} from "../../nav-content/products/naks/naks.component";
import {HiphopComponent} from "../../nav-content/products/sweet/hiphop/hiphop.component";
import {EditsmComponent} from "../../nav-content/sales-executive/editsm/editsm.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {UserdashboardsmComponent} from "../../nav-content/sales-executive/userdashboardsm/userdashboardsm.component";




@NgModule({
  declarations: [
    DeafultComponent,
    DashboardComponent,
    OrdersComponent,
    CustomersComponent,
    EdituserComponent,
    Edituser1Component,
    UserdashboardComponent,
    ProductsComponent,
    CornchipsComponent,
    ParasboxComponent,
    ProductComponent,
    SalesExecutiveComponent,
    CapturePriceComponent,
    ParentcategoriesComponent,
    Userdashboard1Component,
    WashimorderComponent,

    EditsmComponent,
    Userdashboard1Component,

    SweetComponent,
    PuffsComponent,
    PotatoComponent,
    PelletsComponent,
    NaksComponent,
    CornchipsComponent,
    HiphopComponent,
    UserdashboardsmComponent

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
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule




  ]
})
export class DeafultModule {

}

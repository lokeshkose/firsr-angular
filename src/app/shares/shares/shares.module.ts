import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../header/header.component";
import {SidenavComponent} from "../sidenav/sidenav.component";
import {MenubarComponent} from "../menubar/menubar.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    MenubarComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    SidenavComponent,
    MenubarComponent,


  ]
})
export class SharesModule { }

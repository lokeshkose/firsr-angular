import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {DeafultModule} from "./layout/deafult/deafult.module";










@NgModule({
  declarations: [
    AppComponent,








  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    DeafultModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

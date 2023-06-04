import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';


import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';




@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

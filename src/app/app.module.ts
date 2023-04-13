import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import {DxButtonModule, DxDataGridModule} from "devextreme-angular";
import { CheckboxFilterComponent } from './components/checkbox-filter/checkbox-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import {DxButtonModule, DxDataGridModule, DxDrawerModule, DxListModule, DxToolbarModule} from "devextreme-angular";
import { CheckboxFilterComponent } from './components/checkbox-filter/checkbox-filter.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GridPageComponent } from './pages/grid-page/grid-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxFilterComponent,
    DataGridComponent,
    HomePageComponent,
    GridPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

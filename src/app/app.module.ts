import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [BrowserModule, AppRoutingModule, AgGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

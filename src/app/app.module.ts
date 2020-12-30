import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotifiedTableComponent } from './notified-table/notified-table.component';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent, NotifiedTableComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

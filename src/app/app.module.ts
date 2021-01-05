import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotifiedTableComponent } from './notified-table/notified-table.component';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { NotifiedFormComponent } from './notified-form/notified-form.component';
import { InboxTableComponent } from './inbox-table/inbox-table.component';
import { NotifiedDetailComponent } from './notified-detail/notified-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [AppComponent, NotifiedTableComponent, NotifiedFormComponent, InboxTableComponent, NotifiedDetailComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgxPaginationModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

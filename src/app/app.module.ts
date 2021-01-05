import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotifiedTableComponent } from './notified-table/notified-table.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { NotifiedFormComponent } from './notified-form/notified-form.component';
import { InboxTableComponent } from './inbox-table/inbox-table.component';
import { NotifiedDetailComponent } from './notified-detail/notified-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InterceptorService } from './services/spinner/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NotifiedTableComponent,
    NotifiedFormComponent,
    InboxTableComponent,
    NotifiedDetailComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}

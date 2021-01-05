import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotifiedTableComponent } from './notified-table/notified-table.component';
import { NotifiedFormComponent } from './notified-form/notified-form.component';
import { InboxTableComponent } from './inbox-table/inbox-table.component';
import { NotifiedDetailComponent } from './notified-detail/notified-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'notified-table', component: NotifiedTableComponent },
  { path: 'notified-form', component: NotifiedFormComponent },
  { path: 'inbox-table', component: InboxTableComponent },
  { path: 'notified-detail', component: NotifiedDetailComponent },
  { path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

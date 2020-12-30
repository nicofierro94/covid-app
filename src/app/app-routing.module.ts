import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotifiedTableComponent } from './notified-table/notified-table.component';

const routes: Routes = [
  { path: 'notified-table', component: NotifiedTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

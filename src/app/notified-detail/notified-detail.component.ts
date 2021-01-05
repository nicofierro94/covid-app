import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Person {
  name: string;
  document: string;
  mrn: string;
  state: string;
  type: string;
  motive: string;
  diagnostic: string;
}

@Component({
  selector: 'app-notified-detail',
  templateUrl: './notified-detail.component.html',
  styleUrls: ['./notified-detail.component.css']
})
export class NotifiedDetailComponent {

  notify: Person;

  constructor(private router: Router) {
    this.notify = JSON.parse(localStorage.detail);
  }

  back() {
    localStorage.detail = "";
    this.router.navigateByUrl('notified-table');
  }

}

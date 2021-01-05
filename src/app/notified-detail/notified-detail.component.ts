import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../types/types';

@Component({
  selector: 'app-notified-detail',
  templateUrl: './notified-detail.component.html',
  styleUrls: ['./notified-detail.component.css']
})
export class NotifiedDetailComponent {

  notify: any;

  constructor(private router: Router) {
    this.notify = JSON.parse(localStorage.detail);
  }

  back() {
    localStorage.detail = "";
    this.router.navigateByUrl('notified-table');
  }

}

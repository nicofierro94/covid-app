import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notified-form',
  templateUrl: './notified-form.component.html',
  styleUrls: ['./notified-form.component.css']
})
export class NotifiedFormComponent {

  peopleToNotify: any;

  notifyForm = new FormGroup({
    type: new FormControl('1'),
    motive: new FormControl(''),
    diagnostic: new FormControl(''),
  });

  constructor(private router: Router) {
    this.peopleToNotify = JSON.parse(localStorage.selected);
  }

  onSubmit() {
    alert("Notificado exitosamente.");
    console.log(this.notifyForm.value);
    this.router.navigateByUrl('inbox-table');
  }

  cancel() {
    localStorage.selected = [];
    this.router.navigateByUrl('inbox-table');
  }

}

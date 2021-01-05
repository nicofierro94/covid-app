import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notified-form',
  templateUrl: './notified-form.component.html',
  styleUrls: ['./notified-form.component.css']
})
export class NotifiedFormComponent {

  peopleToNotify: any;

  notifyForm = new FormGroup({
    type: new FormControl('Ingreso de internación'),
    motive: new FormControl(''),
    diagnostic: new FormControl(''),
  });

  constructor(private router: Router, private notification: NotificationService) {
    this.peopleToNotify = JSON.parse(localStorage.selected);
  }

  onSubmit() {
    alert("Notificado exitosamente.");
    console.log(this.notifyForm.value);
    const notification = {
      type: this.notifyForm.value.type,
      motive: this.notifyForm.value.motive,
      diagnostic: this.notifyForm.value.diagnostic
    }
    this.notification.postNotified(this.peopleToNotify, notification);
    this.router.navigateByUrl('inbox-table');
  }

  cancel() {
    localStorage.selected = [];
    this.router.navigateByUrl('inbox-table');
  }

}

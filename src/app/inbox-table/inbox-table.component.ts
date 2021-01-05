import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../types/types';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-inbox-table',
  templateUrl: './inbox-table.component.html',
  styleUrls: ['./inbox-table.component.css']
})
export class InboxTableComponent {

  peopleCheck = [];

  masterSelected: boolean;
  checklist = [];
  checkedList = [];

  filterValue: string;

  page: number = 1;

  constructor(private router: Router, private notification: NotificationService) {
    const people = notification.getInbox();
    this.masterSelected = false;
    for (let person of people) {
      let personCheck = { person: person, isSelected: false };
      this.peopleCheck.push(personCheck);
    }
    this.checklist = this.peopleCheck;
    this.getCheckedItemList();
  }

  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  isAllSelected() {
    this.masterSelected = this.checklist.every(function (item: any) {
      return item.isSelected == true;
    });
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected)
        this.checkedList.push(this.checklist[i]);
    }
    //this.checkedList = JSON.stringify(this.checkedList);
  }

  changeCheck(mrn: number) {
    this.checklist.map((item) => {
      if (item.person.mrn === mrn) item.isSelected = !item.isSelected;
    });
    this.isAllSelected();
  }

  notifyClick() {
    if (this.checkedList.length > 0) {
      localStorage.setItem('selected', JSON.stringify(this.checkedList));
      this.router.navigateByUrl('notified-form');
    } else alert('Debe seleccionar al menos una persona');
  }

}

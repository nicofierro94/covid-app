import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  document: string;
  mrn: string;
  state: string;
}

const people = [
  {
    name: 'Nicolás Fierro',
    document: '4.905157-7',
    mrn: '78748',
    state: 'Hecho mierda',
  },
  {
    name: 'Paula Goicoa',
    document: '4.415667-4',
    mrn: '21415',
    state: 'La más linda',
  },
  {
    name: 'Alexander Wieler',
    document: '3.141345-7',
    mrn: '12445',
    state: 'Sin espalda',
  },
  {
    name: 'Ernesto Silva',
    document: '4.445667-7',
    mrn: '443322',
    state: 'Tiene super poderes',
  },
  {
    name: 'Guillermo Copernico',
    document: '4.912347-7',
    mrn: '78777',
    state: 'Sabe demasiado',
  },
  {
    name: 'Pedro Figari',
    document: '4.987667-4',
    mrn: '45687',
    state: 'Pinta horrible',
  },
  {
    name: 'Jessica Yolanda',
    document: '3.788965-7',
    mrn: '82541663',
    state: 'Demasiado terraja',
  },
  {
    name: 'Jose Gervaz',
    document: '4.698667-7',
    mrn: '98712365',
    state: 'Juraba Artigas',
  },
];

@Component({
  selector: 'app-notified-table',
  templateUrl: './notified-table.component.html',
  styleUrls: ['./notified-table.component.css'],
})
export class NotifiedTableComponent implements OnInit {

  peopleCheck = [];

  masterSelected:boolean;
  checklist:any;
  checkedList:any;

  filterValue: string;

  page: number = 1;

  constructor() {
    this.masterSelected = false;
    for(let person of people) {
      let personCheck = { person: person, isSelected: false };
      this.peopleCheck.push(personCheck);
    }
    this.checklist = this.peopleCheck;
    this.getCheckedItemList();
  }

  ngOnInit(): void {}

  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }

  changeCheck(mrn: number){
    this.checklist.map(item => {
      if(item.person.mrn === mrn) item.isSelected = !item.isSelected;
    });
    this.isAllSelected();
  }
}

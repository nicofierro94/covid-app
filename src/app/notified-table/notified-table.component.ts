import { Component } from '@angular/core';
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

const people = [
  {
    name: 'Nicolás Fierro',
    document: '4.905157-7',
    mrn: '78748',
    state: 'Hecho mierda',
    type: 'Ingreso de internación',
    motive: 'Un motivo extraño',
    diagnostic: 'El diagonstico esta mal'
  },
  {
    name: 'Paula Goicoa',
    document: '4.415667-4',
    mrn: '21415',
    state: 'La más linda',
    type: 'Egreso de internación',
    motive: 'Se aglomero',
    diagnostic: 'Fiebre y toz'
  },
  {
    name: 'Alexander Wieler',
    document: '3.141345-7',
    mrn: '12445',
    state: 'Sin espalda',
    type: 'Detección de casos de COVID-19',
    motive: 'No se junta con nadie',
    diagnostic: 'Come demasiado'
  },
  {
    name: 'Ernesto Silva',
    document: '4.445667-7',
    mrn: '443322',
    state: 'Tiene super poderes',
    type: 'Detección de casos de COVID-19',
    motive: 'Algun motivo',
    diagnostic: 'Algun diagnostico'
  },
  {
    name: 'Guillermo Copernico',
    document: '4.912347-7',
    mrn: '78777',
    state: 'Sabe demasiado',
    type: 'Detección de casos de COVID-19',
    motive: 'Las estrellas son blancas',
    diagnostic: 'Esta loco'
  },
  {
    name: 'Pedro Figari',
    document: '4.987667-4',
    mrn: '45687',
    state: 'Pinta horrible',
    type: 'Detección de casos de COVID-19',
    motive: 'No puede pintar',
    diagnostic: 'La pintura esta cara'
  },
  {
    name: 'Jessica Yolanda',
    document: '3.788965-7',
    mrn: '82541663',
    state: 'Demasiado terraja',
    type: 'Detección de casos de COVID-19',
    motive: 'No se baña',
    diagnostic: 'Esta sucia'
  },
  {
    name: 'Jose Gervaz',
    document: '4.698667-7',
    mrn: '98712365',
    state: 'Juraba Artigas',
    type: 'Detección de casos de COVID-19',
    motive: 'Jura libertador',
    diagnostic: 'No tiene ninguna copa'
  },
];

@Component({
  selector: 'app-notified-table',
  templateUrl: './notified-table.component.html',
  styleUrls: ['./notified-table.component.css'],
})
export class NotifiedTableComponent {

  page: number = 1;
  people = []
  filterValue = "";

  constructor(private router:Router)  {
    this.people = people;
  }

  detail(person: Person){
    localStorage.setItem("detail", JSON.stringify(person));
    this.router.navigateByUrl('notified-detail');
  }

}

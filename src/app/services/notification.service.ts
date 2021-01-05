import { HttpClient } from '@angular/common/http';
import { not } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Person, Notification } from '../types/types';

const inboxGoberment = [
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

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  notified = [];

  inbox = inboxGoberment;

  getNotified(): Array<any> {
    return this.notified;
  }

  postNotified(patients: Array<Person>, notification: Notification) {
    patients.map(p => {
      const i = this.inbox.indexOf(p);
      this.inbox.splice(i, 1);
    });
    patients.map(p => {
      p.type = notification.type;
      p.motive = notification.motive;
      p.diagnostic = notification.diagnostic;
      return p;
    });
    patients.map(p => {
      this.notified.push(p);
    });
  }

  getInbox(): Array<Person> {
    return this.inbox;
  }
}

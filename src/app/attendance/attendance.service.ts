import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Attendee } from './model/attendee';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private attendees : Attendee[]
  private attendeesSubject: BehaviorSubject<Attendee[]>
  constructor() {
    this.attendees = [
      {id:1, name:'takashi'},
      {id:2, name:'arisa'},
      {id:3, name:'tengen'},
    ]
    this.attendeesSubject = new BehaviorSubject<Attendee[]>(this.attendees);
  }

  readAll(): BehaviorSubject<Attendee[]> {
    return this.attendeesSubject;
  }
  read(id: number): Attendee {
    const attendees = this.attendeesSubject.getValue();
    return attendees.filter((attendee) => attendee.id === id)[0];
  }
  create(attendee: Attendee): number {
    let attendees = this.attendeesSubject.getValue();
    attendees.push(attendee);
    this.attendeesSubject.next(attendees);
    return attendees.length - 1;
  }
  update(id: number, name: string): number{
    console.log(id + name);
    let attendees = this.attendeesSubject.getValue();
    const idx = attendees.findIndex((attendee) => attendee.id === id);
    if (idx < 0){
      return -1;
    } else {
      attendees[idx].name = name;
      this.attendeesSubject.next(attendees);
      return idx;
    }
  }
  delete(id: number){
    console.log(id);
    let attendees = this.attendeesSubject.getValue();
    const idx = attendees.findIndex((attendee) => attendee.id === id);
    if (idx < 0){
      return -1;
    } else {
      attendees = attendees.filter((attendee) => attendee.id !== id);
      this.attendeesSubject.next(attendees);
      return idx;  
    }
  }
}

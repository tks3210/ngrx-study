import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import { Attendee } from '../model/attendee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public attendees : Attendee[] = [];
  constructor(public attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.attendanceService.readAll().subscribe(attendees => this.attendees = attendees);
  }

}

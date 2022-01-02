import { Component, Input, OnInit } from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';
import { AttendanceService } from '../attendance.service';
import { Attendee } from '../model/attendee';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Attendee | undefined;
  public myId : number = 0;
  public myName : string = '';
  public nameForm : FormControl;
  constructor(private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    if (typeof this.item !== 'undefined'){
      this.myId = this.item.id;
      this.myName = this.item.name;
      this.nameForm = new FormControl(this.item.name, Validators.required);
    }
  }

  update() {
    if (this.myId > 0 && this.nameForm.valid){
      this.attendanceService.update(this.myId, this.nameForm.value);
    }
  }

  delete() {
    if (this.myId > 0 && this.nameForm.valid){
      this.attendanceService.delete(this.myId);
    }
  }
}

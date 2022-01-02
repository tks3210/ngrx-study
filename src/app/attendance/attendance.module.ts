import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from './attendance.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AttendanceComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    AttendanceComponent,
  ]
})
export class AttendanceModule { }

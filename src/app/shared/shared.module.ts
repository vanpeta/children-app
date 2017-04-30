import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule 
  ],
  declarations: []
})
export class SharedModule { }

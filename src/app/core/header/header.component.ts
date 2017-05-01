import { Component, OnInit } from '@angular/core';

import { DateService } from './../date-service/date.service';

import { IMyOptions } from 'mydatepicker';


@Component({
  selector: 'gu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  children;
  myDatePickerOptions: IMyOptions = {
        dateFormat: 'mm/dd/yyyy',
        editableDateField: false,
        openSelectorOnInputClick: true
    };


  constructor(private dateService: DateService) { }

  selectDate(e) {
    this.dateService.selectedDate = e.formatted
  }

  getChildren() {
    this.dateService.getChildren()
  }

  ngOnInit() {
  }

}

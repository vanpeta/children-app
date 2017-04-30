import { Component, OnInit } from '@angular/core';

import { ChildrenService } from './../children-service/children.service';

import { IMyOptions } from 'mydatepicker';


@Component({
  selector: 'gu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'mm/dd/yyyy',
        editableDateField: false,
        openSelectorOnInputClick: true
    };


  constructor(private childrenService: ChildrenService) { }

  selectDate(e) {
    this.childrenService.selectedDate = e.formatted
  }

  ngOnInit() {
  }

}

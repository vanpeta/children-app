import { Injectable } from '@angular/core';

import { ChildrenService } from './../children-service/children.service';

//CRUD on the date


@Injectable()
export class DateService {
  selectedDate: string;
  dateData;

  constructor(private childrenService: ChildrenService) { }
//whats the selected date
// set the date data based on selected date (create, update and delete)
  setDateData () {
    let selectedDate = this.selectedDate
    this.dateData = {
      selectedDate: this.childrenService.getChilden()
    }
  }
//and serve (get) the date data based on selected date (read)
  getChildren () {
    return this.dateData
  }
}

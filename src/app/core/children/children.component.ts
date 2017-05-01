import { Component, OnInit } from '@angular/core';

import { DateService } from './../date-service/date.service';

@Component({
  selector: 'gu-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  children = this.dateService.getChildren();
  constructor(private dateService: DateService) { }

  ngOnInit() {
    // this.children = this.childrenService[this.selectedDate].children
  }


}

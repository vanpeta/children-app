import { Component, OnInit } from '@angular/core';

import { ChildrenService } from './../children-service/children.service';

@Component({
  selector: 'gu-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  children;
  constructor(private childrenService: ChildrenService) { }

  ngOnInit() {
    // this.children = this.childrenService[this.selectedDate].children
  }


}

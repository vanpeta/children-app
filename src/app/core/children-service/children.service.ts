import { Injectable } from '@angular/core';

//CRUD on the child

@Injectable()
export class ChildrenService {
  children = [
    {
      name: "Shaleen",
      times: []
    },
    {
      name: "Priya",
      times: []
    },
    {
      name: "Said",
      times: []
    },
    {
      name: "Dave",
      times: []
    },
    {
      name: "Mike",
      times: []
    },
    {
      name: "Maria",
      times: []
    },
    {
      name: "AJ",
      times: []
    },
    {
      name: "Jessica",
      times: []
    },
    {
      name: "Margaret",
      times: []
    },
    {
      name: "Carlos",
      times: []
    }
  ];
  data = {'Sun Apr 30 2017': {
      children: this.children.slice()
    }
  };
  selectedDate: string;

  getChilden () {
    return this.children.slice()
  }

  getDateData(date:string) {
    return this.data[date];
  }

  constructor() { }

}

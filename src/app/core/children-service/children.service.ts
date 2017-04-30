import { Injectable } from '@angular/core';

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
      children: this.children
    }
  };
  selectedDate: string;

  getDateData(date:string) {
    return this.data[date];
  }

  constructor() { }

}

import { Component, OnInit } from '@angular/core';

interface Check{
  status: boolean;
  dueDate: Date;
  text: string;
  user?: number;
}

@Component({
  selector: 'app-checklist',
  templateUrl: './cheklist.component.html',
  styleUrls: ['./cheklist.component.scss']
})
export class CheklistComponent implements OnInit {

  private checkList: Check[];

  constructor() { }

  ngOnInit() {
    this.checkList = [
      { status: false, dueDate: new Date(), text: 'Tarea 1' },
      { status: false, dueDate: new Date(), text: 'Tarea 2' },
      { status: false, dueDate: new Date(), text: 'Tarea 3' },
      { status: false, dueDate: new Date(), text: 'Tarea 4' },
      { status: false, dueDate: new Date(), text: 'Tarea 5' },
    ];
  }

}

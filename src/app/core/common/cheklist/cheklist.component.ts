import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  // AfterContentInit,
  AfterViewInit,
} from '@angular/core';
import { CheckComponent } from '../check/check.component';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

export interface Check{
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

  @ViewChildren(CheckComponent) checks: QueryList<CheckComponent>;

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

  // ngAfterViewInit(){
  //   this.checks.forEach((item: CheckComponent) => item.foo = "Hola");
  // }

  // foo(){
  //   this.checkList.push({ status: false, dueDate: new Date(), text: 'Tarea 5' });
  // }

  addTask(element){
    this.checkList.push({status: false, dueDate: new Date(), text: element.value});
    element.value = "";
  }

}

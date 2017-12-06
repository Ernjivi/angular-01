import {
  Component,
  OnInit,
  Input,
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
  @Input()
  private checkList: Check[];

  constructor() { }

  ngOnInit() {
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

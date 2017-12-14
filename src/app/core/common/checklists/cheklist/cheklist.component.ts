import {
  Component,
  OnInit,
  Input,
  QueryList,
  ViewChildren,
  AfterViewInit,
  AfterContentInit
} from '@angular/core';

import { CheckComponent } from '../check/check.component';
import { Check } from "../../../../models/check.model";

@Component({
  selector: 'app-checklist',
  templateUrl: './cheklist.component.html',
  styleUrls: ['./cheklist.component.scss']
})
export class CheklistComponent implements OnInit {

  @ViewChildren(CheckComponent) checks: QueryList<CheckComponent>;
  
  @Input() checkList: Check[];

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
    this.checkList.push({status: false, text: element.value});
    element.value = "";
  }

}

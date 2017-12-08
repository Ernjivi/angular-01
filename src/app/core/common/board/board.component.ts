import { Component, OnInit } from '@angular/core';

import { DragulaService } from "ng2-dragula";

import { Card } from "../../../models/card.model";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  private cards: Card[] = [];
  private backlog: Card[] = [];
  private freezer: Card[] = [];
  private todo: Card[] = [];
  private onGoing: Card[] = [];
  private test: Card[] = [];
  private done: Card[] = [];
  private indexes: Array<Card[]> = [
    this.backlog,
    this.freezer,
    this.todo,
    this.onGoing,
    this.test,
    this.done
  ]
  
  constructor(private dragulaService: DragulaService) {
    // Drag Event
    this.dragulaService.drag.subscribe((value) => {
      // console.log(`drag: ${value[0]}`);
      this.onDrag(value.slice(1));
    });
    // Drop Event
    this.dragulaService.drop.subscribe((value) => {
      // console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    // Over Event
    this.dragulaService.over.subscribe((value) => {
      // console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    // Out Even
    // this.dragulaService.out.subscribe((value) => {
    //   console.log(`out: ${value[0]}`);
    //   this.onOut(value.slice(1));
    // });
    // ng2-dragular evetns
    // dropModel
    this.dragulaService.dropModel.subscribe((value)=>{
      this.onModelDrop(value);
    });
    // removeModel
    // this.dragulaService.removeModel.subscribe(()=>{});
  }

  ngOnInit() {
    this.getData();
    this.cards.forEach((card:Card) => {
      this.indexes[card.status].push(card);
    });
    // console.log(this.indexes);
  }

  private getData(): void {
    this.cards = [
      {
        id: 1,
        text: 'Historia de usuario 1',
        status: 0,
        checkList: [
          { status: false, dueDate: new Date(), text: "Tarea1" },
          { status: false, dueDate: new Date(), text: "Tarea2" },
          { status: false, dueDate: new Date(), text: "Tarea3" },
          { status: false, dueDate: new Date(), text: "Tarea4" },
        ]
      },
      {
        id: 2,
        text: 'Historia de usuario 2',
        status: 5,
        checkList: [
          { status: false, dueDate: new Date(), text: "Tarea1" },
          { status: false, dueDate: new Date(), text: "Tarea2" },
          { status: false, dueDate: new Date(), text: "Tarea3" },
          { status: false, dueDate: new Date(), text: "Tarea4" },
        ]
      },
      {
        id: 3,
        text: 'Historia de usuario 3',
        status: 0,
        checkList: [
          { status: false, dueDate: new Date(), text: "Tarea1" },
          { status: false, dueDate: new Date(), text: "Tarea2" },
          { status: false, dueDate: new Date(), text: "Tarea3" },
          { status: false, dueDate: new Date(), text: "Tarea4" },
        ]
      },
      {
        id: 4,
        text: 'Historia de usuario 4',
        status: 0,
        checkList: [
          { status: false, dueDate: new Date(), text: "Tarea1" },
          { status: false, dueDate: new Date(), text: "Tarea2" },
          { status: false, dueDate: new Date(), text: "Tarea3" },
          { status: false, dueDate: new Date(), text: "Tarea4" },
        ]
      }
    ];
  }

  private onDrag(args): void {
    let [e, el] = args;
    // console.log(args);
  }
  
  private onDrop(args): void {
    let [e, el] = args;
    // console.log(args);
  }
  
  private onOver(args): void {
    let [e, el, container] = args;
    // console.log(args);
  }
  
  // private onOut(args): void {
  //   let [e, el, container] = args;
  //   // do something
  // }

  private onModelDrop(args): void{
    // let [bagName, el, target, source] = args;
    console.log(args);
  }

}

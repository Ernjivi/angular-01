import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Check } from "../../../models/check.model";
import { Card } from "../../../models/card.model";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public cards = this.cards = [
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
  @Input() card: Card;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe((params) => {
    //   this.card = this.cards.find(card => card.id == params.id);
    // });
  }

}

import { Component, OnInit } from '@angular/core';
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
  private toDo: Card[] = [];
  private onGoing: Card[] = [];
  private test: Card[] = [];
  private done: Card[] = [];
  private indexes: Array<Card[]>;

  ngOnInit(): void{
    this.indexes = [
      this.backlog,
      this.freezer,
      this.toDo,
      this.onGoing,
      this.test,
      this.done
    ]
    this.getCards();
  }

  getCards(): void{
    this.cards = [
      {
        id: 1,
        status: 0,
        text: 'Tarea 1',
        checkList: [
          { text: 'Criterio 1', status: false },
          { text: 'Criterio 2', status: false },
          { text: 'Criterio 3', status: false },
          { text: 'Criterio 4', status: false },
        ]
      },
      {
        id: 2,
        status: 0,
        text: 'Tarea 2',
        checkList: [
          { text: 'Criterio 1', status: false },
          { text: 'Criterio 2', status: false },
          { text: 'Criterio 3', status: false },
          { text: 'Criterio 4', status: false },
        ]
      },
      {
        id: 3,
        status: 0,
        text: 'Tarea 3',
        checkList: [
          { text: 'Criterio 1', status: false },
          { text: 'Criterio 2', status: false },
          { text: 'Criterio 3', status: false },
          { text: 'Criterio 4', status: false },
        ]
      },
      {
        id: 4,
        status: 1,
        text: 'Tarea 4',
        checkList: [
          { text: 'Criterio 1', status: false },
          { text: 'Criterio 2', status: false },
          { text: 'Criterio 3', status: false },
          { text: 'Criterio 4', status: false },
        ]
      },
    ]
    this.sortCards();
  }

   sortCards(): void{
     this.cards.forEach((card: Card) => {
       this.indexes[card.status].push(card);
     });
   }



}

import { Component, OnInit, Input } from '@angular/core';
import { Card } from "../../../models/card.model";
import { Check } from "../../../models/check.model";


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

  getTotalChecks(): number{
    return this.card.checkList.length
  }

  getUndoneChecks(): number{
    return this.card.checkList
      .filter((check: Check) => check.status)
      .length
  }

}

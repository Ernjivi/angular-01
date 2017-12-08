import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { DragulaModule } from "ng2-dragula";

import { AppComponent } from './app.component';
import { CheklistComponent } from './core/common/checklists/cheklist/cheklist.component';
import { CheckComponent } from './core/common/checklists/check/check.component';
import { CardComponent } from './core/common/card/card.component';
import { BoardComponent } from './core/common/board/board.component';
import { CardItemComponent } from './core/common/card-item/card-item.component';

const routes: Routes = [
  { path: '', component: BoardComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    CheklistComponent,
    CheckComponent,
    CardComponent,
    BoardComponent,
    CardItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    DragulaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

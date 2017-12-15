import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { DndModule } from "ng2-dnd";

import { AuthService } from "./services/auth.service";

import { AppComponent } from './app.component';
import { CheklistComponent } from './core/common/checklists/cheklist/cheklist.component';
import { CheckComponent } from './core/common/checklists/check/check.component';
import { CardComponent } from './core/common/card/card.component';
import { BoardComponent } from './core/common/board/board.component';
import { CardItemComponent } from './core/common/card-item/card-item.component';
import { LoginComponent } from './core/auth/login/login.component';

const routes: Routes = [
  { path: '', component: BoardComponent },
  { path: 'card/:id', component: CardComponent },
  { path: 'login', component: LoginComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    CheklistComponent,
    CheckComponent,
    CardComponent,
    BoardComponent,
    CardItemComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    DndModule.forRoot(),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

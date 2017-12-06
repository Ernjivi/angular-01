import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { CheklistComponent } from './core/common/cheklist/cheklist.component';
import { CheckComponent } from './core/common/check/check.component';
import { CardComponent } from './core/common/card/card.component';

const routes: Routes = [
  { path: '', component: CardComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    CheklistComponent,
    CheckComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

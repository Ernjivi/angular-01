import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CheklistComponent } from './core/common/cheklist/cheklist.component';
import { CheckComponent } from './core/common/check/check.component';


@NgModule({
  declarations: [
    AppComponent,
    CheklistComponent,
    CheckComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

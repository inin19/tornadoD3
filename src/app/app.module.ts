import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HorizontalChartComponent } from './horizontal-chart/horizontal-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HorizontalChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

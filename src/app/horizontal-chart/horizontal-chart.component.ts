import { Component, OnInit, OnChanges, ViewChild, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { TornadoChartData } from '../model/tornado-chart-data';

@Component({
  selector: 'app-horizontal-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './horizontal-chart.component.html',
  styleUrls: ['./horizontal-chart.component.css']
})
export class HorizontalChartComponent implements OnInit {

  private tornadoChartData: TornadoChartData;

  @Input() private jsonData: Array<any>;

  constructor() { }

  ngOnInit() {
    this.tornadoChartData = new TornadoChartData(this.jsonData);
    // console.log(this.jsonData);
  }

}

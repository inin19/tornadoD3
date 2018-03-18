import { Component, OnInit, OnChanges, ViewChild, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { TornadoChartData } from '../model/tornado-chart-data';
import * as d3 from 'd3';

@Component({
  selector: 'app-horizontal-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './horizontal-chart.component.html',
  styleUrls: ['./horizontal-chart.component.css']
})
export class HorizontalChartComponent implements OnInit {

  // need cache
  static ageGroup = ['0-18', '18-35', '35-60', '60+'];
  static gender = ['Female', 'Male'];
  static color = ['blue'];


  private tornadoChartData: TornadoChartData;
  private graphData: Array<any>;


  @Input() private jsonData: Array<any>;
  @ViewChild('tornadoChart') private chartContainer: ElementRef;
  private margin: any = { top: 30, right: 60, bottom: 30, left: 60 };
  private chart: any;
  private width: number;
  private height: number;

  private xScale: any;
  private yScale: any;
  private yInnerScale: any;
  private xAxis: any;
  private yAxis: any;



  constructor() { }

  ngOnInit() {
    this.getChartData();
    this.createChart();

  }

  getChartData() {
    this.tornadoChartData = new TornadoChartData(this.jsonData);
    this.graphData = this.tornadoChartData.getGraphData();

    // this.graphData.forEach(element => {
    //   console.log(element.key, element.percentage);
    // });

  }

  createChart() {
    const element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;


    const svg = d3.select('#tornadoChart').append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    this.chart = svg
      .append('g')
      .classed('bars', true)
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);



    // create scales
    this.xScale = d3.scaleLinear()
      .range([0, this.width]);


  }


}

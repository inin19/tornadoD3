import { Component, OnInit, OnChanges, ViewChild, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { TornadoChartData } from '../model/tornado-chart-data';
import * as d3 from 'd3';

@Component({
  selector: 'app-horizontal-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './horizontal-chart.component.html',
  styleUrls: ['./horizontal-chart.component.css']
})
export class HorizontalChartComponent implements OnInit, OnChanges {

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
    this.updateChart(this.jsonData);

    this.graphData.forEach(element => {
      console.log(element.key, element.percentage);
    });

  }

  ngOnChanges() {
    if (this.chart) {
      this.getChartData();
      this.updateChart(this.jsonData);
    }
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
      .domain([-this.tornadoChartData.getMaxPercentage(), this.tornadoChartData.getMaxPercentage()])
      .range([0, this.width]);

    this.yScale = d3.scaleBand()
      .domain(TornadoChartData.UKAgeGroup)
      .range([this.height, 0])
      .padding(0.2);


    // x axis  percentage formatting remove (-) sign
    const xaxis = d3.axisBottom(this.xScale)
      .tickFormat((d) => d3.format('.0%')(Math.abs(Number(d))));



    const yaxis = d3.axisLeft(this.yScale)
      .tickSize(0);
    // .tickSizeOuter(0);


    this.xAxis = this.chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${this.height})`)
      .call(xaxis);

    this.yAxis = this.chart.append('g')
      .attr('class', 'y axis')
      .call(yaxis);


    // move y axis path to the middle
    d3.select('.y.axis path')
      .attr('transform', 'translate(' + this.width / 2 + ',0)');

  }

  updateChart(jsonData: Array<any>) {
    // update data
    this.tornadoChartData.processGraphData(jsonData);
    this.graphData = this.tornadoChartData.getGraphData();

    // update scales
    this.xScale
      .domain([-this.tornadoChartData.getMaxPercentage(), this.tornadoChartData.getMaxPercentage()]);

    // probabaly not needed
    this.yScale
      .domain(TornadoChartData.UKAgeGroup);


    // update axis

    const xaxis = d3.axisBottom(this.xScale)
      .tickFormat((d) => d3.format('.0%')(Math.abs(Number(d))));

    this.xAxis.transition().call(xaxis);

    const yaxis = d3.axisLeft(this.yScale)
      .tickSize(0);

    this.yAxis.transition().call(yaxis);





    const bars = this.chart.selectAll('.bar')
      .data(this.graphData);


    // remove exiting bars
    bars.exit().remove();

    // update existing bars
    this.chart.selectAll('.bar').transition()
      .attr('y', (d) => this.yScale(d.key.ageGroup))
      .attr('x', (d) => this.xScale(Math.min(0, d.percentage)))
      .attr('width', (d) => Math.abs(this.xScale(d.percentage) - this.xScale(0)))
      .attr('height', this.yScale.bandwidth());


    // add new bars
    bars
      .enter()
      .append('rect')
      .attr('class', function (d) { return 'bar bar--' + (d.percentage < 0 ? 'negative' : 'positive'); })
      .attr('y', (d) => this.yScale(d.key.ageGroup))
      .attr('x', (d) => this.xScale(Math.min(0, d.percentage)))
      .attr('width', (d) => Math.abs(this.xScale(d.percentage) - this.xScale(0)))
      .attr('height', this.yScale.bandwidth());



  }
}

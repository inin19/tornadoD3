import * as d3 from 'd3';
import * as crossfilter from 'crossfilter';

export class TornadoChartData {
    private ndx: any;


    // Dimensions
    private regionDimension: any;
    private reportDimension: any;


    // Groups

    private reportDimensionGroup: any;


    // Output
    private graphData: Array<any>;

    private proposalAggregateData: any;

    constructor(data: Array<any>) {
        this.createDimentionGroup(data);




    }



    createDimentionGroup(data: Array<any>) {
        this.ndx = crossfilter(data);
        this.regionDimension = this.ndx.dimension((d) => d.region);

        this.reportDimension = this.ndx.dimension((d) => JSON.stringify({
            'region': d.region,
            'ageGroup': d.ageGroup,
            'gender': d.gender
        }));


        this.reportDimensionGroup = this.reportDimension.group();

        this.reportDimensionGroup.all().forEach(function (d) {
            d.key = JSON.parse(d.key);
        });


        console.log(this.reportDimensionGroup.all());




    }

    processGraphData(data: Array<any>) {

    }


}

import * as d3 from 'd3';
import * as crossfilter from 'crossfilter';

export class TornadoChartData {


    static FEMALE = 'F';
    static MALE = 'M';


    static REGION = 'region';
    static RELATION = 'relation';
    static AGEGROUP = 'ageGroup';
    static GENDER = 'gender';

    private ndx: any;


    // Dimensions
    private relationDimension: any;
    private regionDimension: any;
    private genderDimension: any;

    private graphDimension: any;


    // Groups
    private graphDimensionGroup: any;
    private genderDimensionGroup: any;


    // Output
    private graphData: Array<any>;
    private demographicAggregateData: any;
    private femaleMemberCount: number;
    private maleMemberCount: number;




    constructor(data: Array<any>) {
        this.createDimentionGroup(data);
        this.processGraphData(data);

        // this.processGraphData(data, ['South'], ['EMPLOYEE']);

        this.demographicAggregateData.forEach(element => {
            console.log(element.key, element.value , element.genderTotal , element.percentage );
        });

    }



    createDimentionGroup(data: Array<any>) {
        this.ndx = crossfilter(data);
        this.regionDimension = this.ndx.dimension((d) => d.region);
        this.relationDimension = this.ndx.dimension((d) => d.relation);
        this.genderDimension = this.ndx.dimension((d) => d.gender);


        this.graphDimension = this.ndx.dimension((d) => JSON.stringify({
            // 'region': d.region,
            // 'relation': d.relation,
            'ageGroup': d.ageGroup,
            'gender': d.gender
        }));


        this.graphDimensionGroup = this.graphDimension.group();
        this.genderDimensionGroup = this.genderDimension.group();

        this.graphDimensionGroup.all().forEach(function (d) {
            d.key = JSON.parse(d.key);
        });


    }

    processGraphData(data: Array<any>, regions?: Array<string>, relation?: Array<string>) {

        if (regions) {
            this.regionDimension.filter((d) => regions.indexOf(d) !== -1);
        }

        if (relation) {
            this.relationDimension.filter((d) => relation.indexOf(d) !== -1);
        }

        this.demographicAggregateData = this.graphDimensionGroup.reduceSum((d) => d.memberCount).all();

        // this.graphData = this.demographicAggregateData;

        // begin to calculate F/M percentage

        // assign member count for female and male
        this.genderDimensionGroup.reduceSum((d) => d.memberCount).all().forEach(element => {
            if (element.key === TornadoChartData.FEMALE) {
                this.femaleMemberCount = element.value;
            }
            if (element.key === TornadoChartData.MALE) {
                this.maleMemberCount = element.value;
            }
        });


        this.demographicAggregateData.forEach(element => {
            if (element.key.gender === TornadoChartData.FEMALE) {
                element.genderTotal = this.femaleMemberCount;
                element.percentage = element.value / element.genderTotal;
            } else {
                element.genderTotal = this.maleMemberCount;
                element.percentage = element.value / element.genderTotal;

            }
        });

    }



    getDemographicAggregateData(): any {
        return this.demographicAggregateData;
    }
}

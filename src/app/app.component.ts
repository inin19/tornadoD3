import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import * as crossfilter from 'crossfilter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  json: Array<any>;

  json1: Array<any>;
  json2: Array<any>;


  ngOnInit() {
    this.json1 = [
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 9
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 9
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 9
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 9
      }
     ];


     this.json2 = [

    ];

    this.json2 = [
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 9
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 9
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 9
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 9
      }
    ];

    this.json = this.json1;

  }
  ngOnChanges() {

  }

  changeData(num: number) {

    if (num === 2) {
      this.json = this.json2;
    } else {
      this.json = this.json1;
    }
  }




}

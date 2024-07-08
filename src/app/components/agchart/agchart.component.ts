import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { AgCharts } from "ag-charts-angular";
import { AgBarSeriesOptions, AgChartOptions } from "ag-charts-community";

/* Core Data Grid CSS */
import 'ag-grid-community/styles/ag-grid.css';
/* Quartz Theme Specific CSS */
import 'ag-grid-community/styles/ag-theme-quartz.css';
// import a from '../../../assets/mock_ticketsystem_data.json';


@Component({
  selector: 'app-agchart',
  standalone: true,
  imports: [CommonModule, AgCharts],
  templateUrl: './agchart.component.html',
  styleUrls: ['./agchart.component.css'],
  encapsulation: ViewEncapsulation.None  // Add this line
})
export class AgChartComponent {
  isBrowser: boolean;
  public options;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    type IData = {
      quarter: string;
      petrol: number;
      diesel: number;
    }

    this.isBrowser = isPlatformBrowser(this.platformId);

    this.options = {
      title: {
        text: "Annual Fuel Expenditure",
      },
      data: [
        {
          quarter: "Q1",
          petrol: 200,
          diesel: 100,
        },
        {
          quarter: "Q2",
          petrol: 300,
          diesel: 130,
        },
        {
          quarter: "Q3",
          petrol: 350,
          diesel: 160,
        },
        {
          quarter: "Q4",
          petrol: 400,
          diesel: 200,
        },
      ] as IData[],
      series: [
        {
          type: undefined,
          xKey: "quarter",
          yKey: "petrol",
          yName: "Petrol",
          
        },
        {
          type: undefined,
          xKey: "quarter",
          yKey: "diesel",
          yName: "Diesel",
        },
      ],
    };
  }
  


}
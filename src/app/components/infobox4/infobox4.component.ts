import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { IxModule } from '@siemens/ix-angular';
import { AgCharts } from "ag-charts-angular";
import { AgBarSeriesOptions, AgChartOptions } from "ag-charts-community";

/* Core Data Grid CSS */
import 'ag-grid-community/styles/ag-grid.css';
/* Quartz Theme Specific CSS */
import 'ag-grid-community/styles/ag-theme-quartz.css';
// import a from '../../../assets/mock_ticketsystem_data.json';


@Component({
  selector: 'app-infobox4',
  standalone: true,
  imports: [CommonModule, AgCharts, IxModule],
  templateUrl: './infobox4.component.html',
  styleUrls: ['./infobox4.component.css'],
  encapsulation: ViewEncapsulation.None  // Add this line
})
export class Infobox4Component {
  url: string = '../../../assets/mock_comfort_score_data.json';
  customerData: any;
  isBrowser: boolean = false;
  isDataLoaded: boolean = false;

  feeling1: number = 0;
  feeling2: number = 0;
  feeling3: number = 0;
  avg_feeling: number = 0;
  public options!: AgChartOptions;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
   
  }
  ngOnInit() {
  this.fetchDataAndSetOptions();
  console.log("this feeling:", this.feeling1);
}
fetchDataAndSetOptions() {

  fetch(this.url).then(res => res.json())
  .then(json => {
    this.customerData = json;
    
     this.customerData.forEach(  (arr: any) =>  {
    console.log(arr.customer.status);   
    //console.log("AAAAAAAAAAAAA");  
      switch (arr.customer.status) {
        case "happy":
          this.feeling1++;
          break;
        case "neutral":
          this.feeling2++;
          break;
        case "bad":
          this.feeling3++;
          break;
      }
      //console.log(arr.customer.comfort_score);
      this.avg_feeling += arr.customer.comfort_score;
  });
  this.avg_feeling = this.avg_feeling / this.customerData.length;
  //console.log(this.avg_feeling);
  
  this.updateChartOptions();

  this.isDataLoaded = true;  
});

  //this.updateChartOptions();
}

updateChartOptions() {
  type IData = {
    status: string;
    comfortScore: number;
  };

this.options = {
  data: [
    { status: "Happy",  comfortScore: this.feeling1 },
    { status: "",  comfortScore: 0 },
    { status: "Neutral", comfortScore: this.feeling2 },
    { status: " ",  comfortScore: 0 },
    { status: "Sad", comfortScore: this.feeling3 },
    ] as IData[],
  series: [
    {
      type: "bar",
      xKey: "status",
      yKey: "comfortScore",
      fill: "#0cc",
      
      cornerRadius: 10,
    } as AgBarSeriesOptions,
  ],
  axes: [
    {
      type: "category",
      position: "bottom",
      label: {
        color: '#d1d1d1',
      },
    },
    {
      type: "number",
      position: "left",
      label: {
        color: '#d1d1d1',
      },
    },
  ],

  background: {
    fill: '#2d2d2d',
  },
  title: {
    text: 'Comfort Score',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#d1d1d1',
    textAlign: 'left',
  },

  subtitle: {
    text: 'average ' + this.avg_feeling + "/" + 10,
    fontSize: 14,
    color: '#d1d1d1',
    textAlign: 'left',
  },  
};
}
}



/*import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { IxModule } from '@siemens/ix-angular';
import { AgCharts } from "ag-charts-angular";
import { AgBarSeriesOptions, AgChartOptions } from "ag-charts-community";

/* Core Data Grid CSS 
import 'ag-grid-community/styles/ag-grid.css';
/* Quartz Theme Specific CSS 
import 'ag-grid-community/styles/ag-theme-quartz.css';
// import a from '../../../assets/mock_ticketsystem_data.json';


@Component({
  selector: 'app-infobox4',
  standalone: true,
  imports: [CommonModule, AgCharts, IxModule],
  templateUrl: './infobox4.component.html',
  styleUrls: ['./infobox4.component.css'],
  encapsulation: ViewEncapsulation.None  // Add this line
})
export class Infobox4Component {
  url: string = '../../../assets/mock_comfort_score_data.json';
  customerData: any;
  isBrowser: boolean = false;
  
  feeling1: number = 0;
  feeling2: number = 0;
  feeling3: number = 0;

  public options!: AgChartOptions;

  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
   
  }

  

  ngOnInit() {
    type IData = {
      status: string;
      avgTemp: number;
      comfortScore: number;
    };

    fetch(this.url).then(res => res.json())
    .then(json => {
      this.customerData = json;
      
       this.customerData.forEach(  (arr: any) =>  {
      console.log(arr.customer.status);   
      //console.log("AAAAAAAAAAAAA");  
        switch (arr.customer.status) {
          case "happy":
            this.feeling1++;
            break;
          case "neutral":
            this.feeling2++;
            break;
          case "bad":
            this.feeling3++;
            break;
        }
    });
    console.log(this.feeling3);  
    
  });

  this.options = {
    data: [
      { status: "Happy",  comfortScore: this.feeling1 },
      { status: "",  comfortScore: 0 },
      { status: "Neutral", comfortScore: this.feeling2 },
      { status: " ",  comfortScore: 0 },
      { status: "Sad", comfortScore: this.feeling3 },
      ] as IData[],
    series: [
      {
        type: "bar",
        xKey: "status",
        yKey: "comfortScore",

      } as AgBarSeriesOptions,
    ],
    
  };
  
   


}
}*/
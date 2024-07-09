import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { IxModule } from '@siemens/ix-angular';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-infobox1',
  standalone: true,
  imports: [IxModule, AgGridAngular, CommonModule],
  templateUrl: './infobox1.component.html',
  styleUrls: ['./infobox1.component.css',
    '../../app.component.css'
  ]
})
export class Infobox1Component {
  isBrowser: boolean;
  url: string = '../../../assets/mock_comfort_score_data.json';
  employeeData: any;

 
  //{ field: "customer.logo"},
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { 
      field: "logo",
      cellRenderer: (params: any) => {
        //console.log(params.data.customer.partition);
        return params.data.customer.partition === "building" ? '<ix-icon name="building1"></ix-icon>' : '<ix-icon name="building2"></ix-icon>';
      }
    },
    { field: "customer.name" },
    { field: "customer.partition" },
    { field: "customer.status" },
    { field: "customer.comfort_score" },
    
    
  ];

  
  defaultColDef: ColDef = {
    sortable: true,
    filter: true
  };
  public clickTest() {
  //   console.log(this.employeeData);
  // console.log(this.employeeData);
  // console.log(this.colDefs);
  
}

constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  this.isBrowser = isPlatformBrowser(this.platformId);
}

ngOnInit() {
    fetch(this.url).then(res => res.json())
    .then(json => {
      this.employeeData = json;
    });

    // this.employeeData.forEach( function logofinder (partition: any) {
    //   if (partition.customer.partition === 'demo') {
    //     console.log("AAAAAAAA");
    //     partition.customer.logo = 'building1';
        
    //   } else if (partition.customer.partition === 'building') {
    //     console.log("BBBBBBBB");
    //     partition.customer.logo = 'building2-filled';
    // }
    // });


  }

  
}

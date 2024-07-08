import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
/* Core Data Grid CSS */
import 'ag-grid-community/styles/ag-grid.css';
/* Quartz Theme Specific CSS */
import 'ag-grid-community/styles/ag-theme-quartz.css';
// import a from '../../../assets/mock_ticketsystem_data.json';


@Component({
  selector: 'app-agggrid',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.css'],
                                                    //encapsulation: ViewEncapsulation.None  // Add this line
})
export class AggGridComponent {
  isBrowser: boolean;
  url: string = '../../../assets/mock_ticketsystem_data.json';
  employeeData: any;
//   rowData = [
//     { make: "Tesla", model: "Model Y", price: 64950, electric: true },
//     { make: "Ford", model: "F-Series", price: 33850, electric: false },
//     { make: "Toyota", model: "Corolla", price: 29600, electric: false },
//   ];
 
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "customer.id" },
    { field: "customer.firstname" },
    { field: "customer.lastname" },
    { field: "customer.email" },
    { field: "customer.ticketno" }
  ];

  
  defaultColDef: ColDef = {
    sortable: true,
    filter: true
  };
  public clickTest() {
    console.log(this.employeeData);
  console.log(this.employeeData);
  console.log(this.colDefs);
}

constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  this.isBrowser = isPlatformBrowser(this.platformId);
}

ngOnInit() {
    fetch(this.url).then(res => res.json())
    .then(json => {
      this.employeeData = json;
    });
  }
}
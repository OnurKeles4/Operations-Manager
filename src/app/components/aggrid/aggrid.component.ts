import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { IxModule } from '@siemens/ix-angular';
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
  imports: [CommonModule, AgGridModule, IxModule],
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.css'],
                                                    //encapsulation: ViewEncapsulation.None  // Add this line
})
export class AggGridComponent {
  isBrowser: boolean;
  url: string = '../../../assets/mock_ticketsystem_data.json';
  customerData: any;
  selectedCustomer: any;
  selectedCustomerTicket: any;
  selectedCustomerfirstname: any;
  selectedCustomerlastname: any;
  selectedCustomeremail: any;
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
    console.log(this.customerData);
  console.log(this.customerData);
  console.log(this.colDefs);
}

constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  this.isBrowser = isPlatformBrowser(this.platformId);
}

ngOnInit() {
    fetch(this.url).then(res => res.json())
    .then(json => {
      this.customerData = json;
      this.selectedCustomer = this.customerData[0].customer;
      this.selectedCustomerTicket = this.customerData[0].customer.ticketno;
      this.selectedCustomerfirstname = this.customerData[0].customer.firstname;
      this.selectedCustomerlastname = this.customerData[0].customer.lastname;
      this.selectedCustomeremail = this.customerData[0].customer.email;
      console.log(this.selectedCustomer);
    });
  }

changeCustomer(event: any) {
  console.log("Customer changed");
  this.selectedCustomer = event.data.customer;
  console.log(this.selectedCustomer);  

  this.selectedCustomerTicket = event.data.customer.ticketno;
  this.selectedCustomerfirstname = event.data.customer.firstname;
  this.selectedCustomerlastname = event.data.customer.lastname;
  this.selectedCustomeremail = event.data.customer.email;
  //this.selectedCustomer = event.data.customer.ticketno;
}
}
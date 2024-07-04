import { Component } from '@angular/core';
import { IxModule } from '@siemens/ix-angular';

/*
Component to navigate between pages of Infobox2 Table, it will take the number
with the click event and send it to the shared service to change the number of the lower and higher limits
*/
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [IxModule],
  templateUrl: 'breadcrumb.component.html',
  styleUrl: 'breadcrumb.component.css'
})
export class BreadCrumbComponent {

}

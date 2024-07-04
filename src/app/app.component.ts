import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IxModule } from '@siemens/ix-angular';
import { BreadCrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { Infobox1Component } from './components/infobox1/infobox1.component';
import { Infobox2Component } from './components/infobox2/infobox2.component';
import { Infobox3Component } from './components/infobox3/infobox3.component';
import { Infobox4Component } from './components/infobox4/infobox4.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl:'./app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterModule, IxModule, BreadCrumbComponent,
       Infobox1Component, Infobox2Component, Infobox3Component, Infobox4Component
      ]
})
export class AppComponent {
  title = 'main-page';
}

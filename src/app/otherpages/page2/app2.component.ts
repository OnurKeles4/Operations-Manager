import { Component, InjectionToken  } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IxModule } from '@siemens/ix-angular';
import { BreadCrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

import { Infobox6Component } from '../../components/infobox6/infobox6.component';
import { Infobox5Component } from '../../components/infobox5/infobox5.component';
import { Infobox4Component } from '../../components/infobox4/infobox4.component';
import { Infobox3Component } from '../../components/infobox3/infobox3.component';
import { Infobox2Component } from '../../components/infobox2/infobox2.component';
import { Infobox1Component } from '../../components/infobox1/infobox1.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
//import { AGGgridComponent } from './components/aggrid/aggrid.component';


// import '@angular/compiler';
// import { enableProdMode } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';


@Component({
    selector: 'app2-root',
    standalone: true,
    templateUrl: './app2.component.html',
    styleUrl: './app2.component.css',
    imports: [RouterOutlet, IxModule, 
      BreadCrumbComponent,
       Infobox1Component, Infobox2Component, Infobox3Component, Infobox4Component, Infobox5Component, Infobox6Component,
       TabsComponent]
})
export class App2Component {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
  title="mydemo2";
}

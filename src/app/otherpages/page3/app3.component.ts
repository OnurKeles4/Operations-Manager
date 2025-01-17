import { Component } from '@angular/core';

import { IxModule } from '@siemens/ix-angular';
import { Infobox3Component } from '../../components/infobox3/infobox3.component';
import { Infobox4Component } from '../../components/infobox4/infobox4.component';
import { Infobox2Component } from '../../components/infobox2/infobox2.component';
import { Infobox1Component } from '../../components/infobox1/infobox1.component';
import { AggGridComponent } from '../../components/aggrid/aggrid.component';
import { Infobox7Component } from '../../components/infobox7/infobox7.component';

@Component({
    selector: 'app3-root',
    standalone: true,
    templateUrl: './app3.component.html',
    styleUrl: './app3.component.css',
    imports: [IxModule,
       Infobox1Component, Infobox2Component, Infobox3Component, Infobox4Component, AggGridComponent, Infobox7Component]
})
export class App3Component {
  title="mydemo3";
}

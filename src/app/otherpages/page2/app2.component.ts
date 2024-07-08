import { Component } from '@angular/core';
import { IxModule } from '@siemens/ix-angular';
import { BreadCrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

import { Infobox6Component } from '../../components/infobox6/infobox6.component';
import { Infobox5Component } from '../../components/infobox5/infobox5.component';
import { Infobox3Component } from '../../components/infobox3/infobox3.component';
import { Infobox7Component } from '../../components/infobox7/infobox7.component';
import { AgChartComponent } from '../../components/agchart/agchart.component';

@Component({
    selector: 'app2-root',
    standalone: true,
    templateUrl: './app2.component.html',
    styleUrl: './app2.component.css',
    imports: [IxModule, BreadCrumbComponent,
        Infobox3Component, Infobox5Component, Infobox7Component, AgChartComponent]
})
export class App2Component {

  title="mydemo2";
}

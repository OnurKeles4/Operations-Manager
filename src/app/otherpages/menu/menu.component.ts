import { Component } from '@angular/core';
import { IxModule } from '@siemens/ix-angular';
import { Infobox3Component } from '../../components/infobox3/infobox3.component';
import { Infobox4Component } from '../../components/infobox4/infobox4.component';
import { Infobox2Component } from '../../components/infobox2/infobox2.component';
import { Infobox1Component } from '../../components/infobox1/infobox1.component';
import { TabsComponent } from '../../components/tabs/tabs.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [IxModule, Infobox1Component, Infobox2Component,
    Infobox3Component, Infobox4Component, TabsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{
  
}

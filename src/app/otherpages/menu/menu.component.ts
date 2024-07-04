import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../../app.routes';
import { IxModule } from '@siemens/ix-angular';
import { BreadCrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { Infobox3Component } from '../../components/infobox3/infobox3.component';
import { Infobox4Component } from '../../components/infobox4/infobox4.component';
import { Infobox2Component } from '../../components/infobox2/infobox2.component';
import { Infobox1Component } from '../../components/infobox1/infobox1.component';
import { TabsComponent } from '../../components/tabs/tabs.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, IxModule, BreadCrumbComponent,
    Infobox1Component, Infobox2Component, Infobox3Component, Infobox4Component,
    TabsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{
  constructor(private router: Router) {}
  changePage(x: number)  {
    this.router.navigate(['/second-page']);
  }


}

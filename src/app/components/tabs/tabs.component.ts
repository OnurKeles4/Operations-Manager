import { Component } from '@angular/core';
import { IxModule } from '@siemens/ix-angular';
import { SharedDataService } from '../shared.service';



@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [IxModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  selectedTab = 1;

  changeTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }

  indexSend: number = 0;
  constructor(private sharedDataService: SharedDataService) {}

  public choosePage(x: number) {
   this.indexSend = x;
   this.sharedDataService.changeNumber(this.indexSend);
  }
}

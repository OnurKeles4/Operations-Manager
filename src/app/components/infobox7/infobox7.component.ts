import { Component, OnDestroy, OnInit } from '@angular/core';
import { IxModule, TreeContext, TreeModel } from '@siemens/ix-angular';
import { SharedDataService } from '../shared.service';
import { Subscription } from 'rxjs';

type TreeData = {
  name: string;
  icon: string;
  description?: string;
};

@Component({
  selector: 'app-infobox7',
  standalone: true,
  imports: [IxModule],
  templateUrl: './infobox7.component.html',
  styleUrls: ['./infobox7.component.css',
    '../../app.component.css'
  ]
})
//////////////////////////////////////////////////////////////////////////// CONSIDER CARRYING THIS COMPONENT INTO INFBOX 5, and getting tree values
// from there instead of trying to passing the tree data from shared service, it is not working currently.
/// OLD COMMENT ?? (9th July 2024)
export class Infobox7Component implements OnInit, OnDestroy{

  context: TreeContext = {};
  model: TreeModel<TreeData> = {
    root: {
      id: 'root',
      data: {
        icon: '',
        name: '',
        
      },
      hasChildren: true,
      children: [],
  }};
  private subscription!: Subscription;
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.subscription = this.sharedDataService.aTree.subscribe(tree => {
     this.model = tree;      
    });

    //this.model['root'].children.push('sample');
  }

  

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

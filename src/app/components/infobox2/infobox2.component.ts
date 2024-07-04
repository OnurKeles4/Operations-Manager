import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import { IxModule } from '@siemens/ix-angular';
import { SharedDataService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-infobox2',
  standalone: true,
  imports: [CommonModule, IxModule],
  templateUrl: './infobox2.component.html',
  styleUrls: ['./infobox2.component.css',
    '../../app.component.css'
  ]
})
export class Infobox2Component implements OnInit, OnDestroy{
   
   infoBox2Table =  [{id: 1, name: 'Mark', last: 'Otto', handle: 'mdo'},
    {id: 2, name: 'Jacob', last: 'Thornton', handle: 'fat'},
    {id: 3, name: 'Marka', last: 'Ottom', handle: 'mdso'},
    {id: 4, name: 'Jacoba', last: 'Thorntona', handle: 'fatb'},
    {id: 5, name: 'MarkB', last: 'Otto', handle: 'mdo'},
    {id: 6, name: 'JacobA', last: 'Thornton', handle: 'fat'},
    {id: 7, name: 'MarkaDD', last: 'Ottom', handle: 'mdso'},
    {id: 8, name: 'JacobaDD', last: 'Thorntona', handle: 'fatb'},
    {id: 9, name: 'MarkB', last: 'Otto', handle: 'mdo'},
    {id: 10, name: 'JacobA', last: 'Thornton', handle: 'fat'},
    {id: 11, name: 'MarkaDD', last: 'Ottom', handle: 'mdso'},
    {id: 12, name: 'JacobaDD', last: 'Thorntona', handle: 'fatb'},
  ];
  
  receivedNumber: number = 0;
  start: number = 0;
  end: number = 4;
  private subscription!: Subscription;
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.subscription = this.sharedDataService.currentNumber.subscribe(number => {
      this.receivedNumber = number;
      this.start = this.receivedNumber*4;
      this.end = this.start + 4;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

import { Component } from '@angular/core';
import { IxModule } from '@siemens/ix-angular';

@Component({
  selector: 'app-infobox4',
  standalone: true,
  imports: [IxModule],
  templateUrl: './infobox4.component.html',
  styleUrls: ['./infobox4.component.css',
    '../../app.component.css'
  ]
})
export class Infobox4Component {
  suggestions = ['Item 1', 'Item 2'];
}

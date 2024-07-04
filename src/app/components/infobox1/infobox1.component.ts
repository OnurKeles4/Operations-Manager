import { Component } from '@angular/core';
import { IxModule } from '@siemens/ix-angular';

@Component({
  selector: 'app-infobox1',
  standalone: true,
  imports: [IxModule],
  templateUrl: './infobox1.component.html',
  styleUrls: ['./infobox1.component.css',
    '../../app.component.css'
  ]
})
export class Infobox1Component {

}

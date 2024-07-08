import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IxModule } from '@siemens/ix-angular';
import { BreadCrumbComponent } from "./components/breadcrumb/breadcrumb.component";

/**
 * The main component to route between different components, it will have the menu bar and the router outlet.
 */
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl:'./app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterModule, IxModule, BreadCrumbComponent ]
})
export class AppComponent {
  title = 'main-page';
}

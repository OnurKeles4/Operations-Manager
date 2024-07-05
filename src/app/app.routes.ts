import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { App2Component } from './otherpages/page2/app2.component';
import { App3Component } from './otherpages/page3/app3.component';
import { MenuComponent } from './otherpages/home/home.component';
export const routes: Routes = [
  { path: 'home', component: MenuComponent },
  { path: 'analyze', component: App2Component },
  { path: 'calendar', component: App3Component },
];

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { IxModule } from '@siemens/ix-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    importProvidersFrom(
      IxModule.forRoot(),
      BrowserModule,
      BrowserAnimationsModule,
      AgGridModule
  ),
]
};

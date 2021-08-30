import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { ComponentProxyComponent } from './component-proxy.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentProxyComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'learner',
        loadChildren: () => loadRemoteModule({
          remoteEntry: 'http://localhost:3000/learnerEntry.js',
          remoteName: 'learnerUi',
          exposedModule: './LearnerModule',
        }).then(m => m.LearnerModule),
      },
      {
        path: 'cat',
        loadChildren: () => loadRemoteModule({
          remoteName: 'cat',
          exposedModule: './cat-module',
        }).then(m => m.CatUiModule),
      },
      {
        path: 'offering',
        loadChildren: () => loadRemoteModule({
          remoteEntry: 'http://localhost:4201/offeringUiAppEntry.js',
          remoteName: 'offeringUiApp',
          exposedModule: './OfferingAppModule',
        }).then(m => m.OfferingAppModule),
      },
    ]),
    ModuleFederationToolsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

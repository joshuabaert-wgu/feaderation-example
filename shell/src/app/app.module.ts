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
          exposedModule: './learner-module',
        }).then(m => m.AppModule),
      },
      {
        path: 'cat',
        loadChildren: () => loadRemoteModule({
          remoteName: 'cat',
          exposedModule: './cat-module',
        }).then(m => m.CatUiModule),
      },
    ]),
    ModuleFederationToolsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

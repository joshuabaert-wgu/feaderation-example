import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'learner',
        loadChildren: () => loadRemoteModule({
          remoteEntry: 'http://localhost:3000/remoteEntry.js',
          remoteName: 'learnerUi',
          exposedModule: './Module',
        }).then(m => m.AppModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

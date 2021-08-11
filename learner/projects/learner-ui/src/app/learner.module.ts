import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LearnerComponent } from './learner.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
  declarations: [
    LearnerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: LearnerComponent,
        children: [
          {
            path: 'finance',
            loadChildren: () => loadRemoteModule({
              remoteEntry: 'http://localhost:3200/financeEntry.js',
              remoteName: 'finance',
              exposedModule: './FinanceModule',
            }).then(m => m.FinanceModule),
          }
        ]
      },
    ]),
  ],
  providers: [],
  bootstrap: [LearnerComponent],
})
export class LearnerModule {
}

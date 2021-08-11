import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FinanceComponent } from './finance.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FinanceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      { path: '', component: FinanceComponent },
    ]),
  ],
  providers: [],
  bootstrap: [FinanceComponent],
})
export class FinanceModule {
}

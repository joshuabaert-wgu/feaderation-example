import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FinanceComponent } from './finance.component';

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

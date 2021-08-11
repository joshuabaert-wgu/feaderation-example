import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CatUiApp } from './cat-ui-app.component';
import { RouterModule } from '@angular/router';
import { AlertButtonModule } from './alert-button/alert-button.module';

@NgModule({
  declarations: [
    CatUiApp,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      { path: '', component: CatUiApp },
    ]),
    AlertButtonModule,
  ],
  providers: [],
  bootstrap: [
    CatUiApp,
  ],
})
export class CatUiModule {
}

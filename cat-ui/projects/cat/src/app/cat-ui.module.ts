import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { CatUiApp } from './cat-ui-app.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
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

import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { CatUiApp } from './cat-ui-app.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { RouterModule } from '@angular/router';
import { SearchButtonModule } from './search-button/search-button.module';

@NgModule({
  declarations: [
    CatUiApp,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      { path: '', component: CatUiApp },
    ]),
    SearchButtonModule,
  ],
  providers: [],
  bootstrap: [
    CatUiApp,
  ],
})
export class CatUiModule {
}

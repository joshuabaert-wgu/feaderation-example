import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SearchButtonComponent } from './search-button.component';
import { AlertModule } from '../alert/alert.module';

@NgModule({
  imports: [AlertModule],
  exports: [SearchButtonComponent],
  declarations: [SearchButtonComponent],
})
export class SearchButtonModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(SearchButtonComponent, { injector: this.injector });
    customElements.define('cat-search-button', ce);
  }
}

import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AlertButtonComponent } from './alert-button.component';
import { AlertModule } from '../alert/alert.module';

@NgModule({
  imports: [AlertModule],
  exports: [AlertButtonComponent],
  declarations: [AlertButtonComponent],
})
export class AlertButtonModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AlertButtonComponent, { injector: this.injector });
    customElements.define('cat-search-button', ce);
  }
}

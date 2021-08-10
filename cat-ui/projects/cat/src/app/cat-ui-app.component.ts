import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './cat-ui-app.component.html',
  // styleUrls: ['./cat-ui-app.component.scss'],
  styles: [`
  `],
  template: `
    <h1>Cat UI</h1>
    <cat-search-button></cat-search-button>
  `
})
export class CatUiApp {
  title = 'cat';
}

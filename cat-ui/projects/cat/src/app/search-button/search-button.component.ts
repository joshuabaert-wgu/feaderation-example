import { Component } from '@angular/core';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'cat-search-button',
  // styleUrls: ['search-button.component.scss'],
  // templateUrl: 'search-button.component.html',
  styles: [``],
  template: `
    <button (click)="searchClicked()">Search button</button>
  `,
})

export class SearchButtonComponent {
  constructor(private service: AlertService) {
  }

  searchClicked() {
    this.service.message('Hey you clicked the button')
  }
}

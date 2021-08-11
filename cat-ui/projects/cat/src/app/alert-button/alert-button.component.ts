import { Component } from '@angular/core';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'cat-search-button',
  // styleUrls: ['alert-button.component.scss'],
  // templateUrl: 'alert-button.component.html',
  styles: [``],
  template: `
    <button (click)="searchClicked()">Alert Button</button>
  `,
})

export class AlertButtonComponent {
  constructor(private service: AlertService) {
  }

  searchClicked() {
    this.service.message('Hey you clicked the button')
  }
}

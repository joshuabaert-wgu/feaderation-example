import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1>Shell</h1>

    <router-outlet></router-outlet>

  `,
})
export class AppComponent {
  title = 'shell';
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'learner-ui-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./learner.component.scss'],
  template: `
    <h1>Learner-ui</h1>
    some other text
    <button (click)="showFinance()">Show Finance</button>
    <router-outlet></router-outlet>
  `,
})
export class LearnerComponent {
  title = 'learner-ui';

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) {
  }

  showFinance() {
    this.router.navigate(['finance'], {relativeTo: this.activateRoute})
  }
}

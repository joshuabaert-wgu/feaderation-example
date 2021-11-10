import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgpCoreService } from 'ngp-core';

@Component({
  selector: 'learner-ui-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./learner.component.scss'],
  template: `
    <h1>Learner-ui</h1>
    some other text
    <button (click)="addCounter()">add learner</button>
    <button (click)="subtractCounter()">subtract learner</button>
    <button (click)="showFinance()">Show Finance</button>

    <p>{{counter}}</p>

    <router-outlet></router-outlet>
  `,
})
export class LearnerComponent {
  title = 'learner-ui';
  // @ts-ignore
  counter: number;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private sharedService: NgpCoreService,
  ) {
    this.getCounter();
  }

  showFinance() {
    this.router.navigate(['finance'], {relativeTo: this.activateRoute})
  }

  addCounter() {
    console.log(this.sharedService.addCounter());
    this.getCounter();
  }

  subtractCounter() {
    console.log(this.sharedService.subtractCounter());
    this.getCounter();
  }

  getCounter() {
    this.counter = this.sharedService.getCounter();
    console.log(this.counter);
  }
}

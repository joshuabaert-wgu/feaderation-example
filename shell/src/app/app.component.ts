import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgpCoreService } from 'ngp-core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
  styles: [`
    header {
      display: flex;
      flex-direction: column;
    }
  `],
  template: `
    <header #header>
      <h1>Shell</h1>

      <div>
        <button routerLink="">Home</button>

        <button routerLink="learner">Learner UI</button>

        <button routerLink="cat">Cat UI</button>

        <button (click)="addCounter()">add app</button>
        <button (click)="subtractCounter()">subtract app</button>
        <button (click)="getCounter()">update app</button>
        <p>{{counter}}</p>
      </div>

      <component-proxy></component-proxy>


    </header>

    <main>
      <router-outlet></router-outlet>
    </main>


  `,
})
export class AppComponent {
  @ViewChild('header') headerEle: ElementRef | any;
  title = 'shell';
  // @ts-ignore
  counter: number;

  constructor(private sharedService: NgpCoreService) {
    this.getCounter();
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

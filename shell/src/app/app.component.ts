import { Component } from '@angular/core';

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
    <header>
      <h1>Shell</h1>

      <div>
        <button routerLink="">Home</button>

        <button routerLink="learner">Learner UI</button>

        <button routerLink="cat">Learner UI</button>
      </div>
    </header>

    <main>

      <router-outlet></router-outlet>
    </main>


  `,
})
export class AppComponent {
  title = 'shell';
}

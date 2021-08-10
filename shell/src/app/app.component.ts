import { Component, ElementRef, ViewChild } from '@angular/core';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
  styles: [`
    header {
      display: flex;
      flex-direction: column;
    }
    div button {
      margin: 0 15px;
    }
  `],
  template: `
    <header #header>
      <h1>Shell</h1>

      <div>
        <button routerLink="">Home</button>

        <button routerLink="learner">Learner UI</button>

        <button routerLink="cat">Cat UI</button>
      </div>

      <component-proxy></component-proxy>
<!--      <mft-wc-wrapper [options]="item"></mft-wc-wrapper>-->
<!--      <cat-search-button></cat-search-button>-->
    </header>

    <main>

      <router-outlet></router-outlet>
    </main>


  `,
})
export class AppComponent {
  @ViewChild('header') headerEle: ElementRef | any;
  title = 'shell';
  // item: WebComponentWrapperOptions = {
  //   remoteEntry: 'http://localhost:3100/remoteEntry.js',
  //   remoteName: 'cat',
  //   exposedModule: 'SearchModule',
  //   elementName: 'cat-search-button'
  // };

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     const searchButton = document.createElement('cat-search-button')
  //     this.headerEle.nativeElement.append(searchButton)
  //     console.log(this.headerEle.nativeElement);
  //   }, 1000)
  // }
}

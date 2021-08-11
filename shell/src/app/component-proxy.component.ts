import { Component, ComponentFactoryResolver, Injector, OnChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'component-proxy',
  // styleUrls: ['component-proxy.component.scss'],
  // templateUrl: 'component-proxy.component.html',
  styles: [`
  `],
  template: `
    <ng-container #placeholder></ng-container>
  `,
})

export class ComponentProxyComponent implements OnChanges {
  @ViewChild('placeholder', {read: ViewContainerRef, static: true})
  viewContainer: ViewContainerRef | undefined

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) {
  }

  ngOnChanges() {
    console.log('doing on changes');
    this.loadComponent()
  }

  ngAfterViewInit() {
    console.log('after View Init');
    this.loadComponent()
  }

  async loadComponent() {
    if(!this.viewContainer) return
    this.viewContainer.clear();

    const Component = await loadRemoteModule({
      remoteName: 'cat',
      exposedModule: './alert-component',
    }).then(m => m['AlertButtonComponent'])

    const factory = this.cfr.resolveComponentFactory(Component);
    const compRef = this.viewContainer.createComponent(factory, undefined, this.injector)
  }
}

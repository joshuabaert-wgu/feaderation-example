import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform',
})
export class NgpCoreService {
  private counter = 0;

  constructor() {
  }

  addCounter() {
    this.counter++;
    return this.counter;
  }

  subtractCounter() {
    this.counter--;
    return this.counter;
  }

  getCounter() {
    return this.counter;
  }
}

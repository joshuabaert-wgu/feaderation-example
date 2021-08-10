import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  amount = 0
  message(message: any) {
    console.log(`sending alert form service ${this.amount}`);
    alert(message);
    this.amount++;
  }
}

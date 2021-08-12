import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  message(message: any) {
    console.log(`sending alert form service`);
    alert(message);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private msgSrc = new BehaviorSubject('default message');
  currentMsg = this.msgSrc.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.msgSrc.next(message);
  }
}

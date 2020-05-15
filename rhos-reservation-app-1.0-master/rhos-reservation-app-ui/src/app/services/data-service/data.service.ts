import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private eventMessage = new BehaviorSubject('');
  currentEventMessage = this.eventMessage.asObservable();
  constructor() { }

  sendClickEvent(message: string) {
    this.eventMessage.next(message);
  }
}

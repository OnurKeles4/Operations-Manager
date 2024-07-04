import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * This class's purpose is to share data between components. It is taking a number from
 * a component and sending it to another component without having a parent/child relationship.
 */
export class SharedDataService {
  private numberSource = new BehaviorSubject<number>(0);
  currentNumber = this.numberSource.asObservable();

  changeNumber(number: number) {
    this.numberSource.next(number);
  }
}
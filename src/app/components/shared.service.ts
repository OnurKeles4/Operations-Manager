import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private numberSource = new BehaviorSubject<number>(0);
  currentNumber = this.numberSource.asObservable();

  changeNumber(number: number) {
    this.numberSource.next(number);
  }
}
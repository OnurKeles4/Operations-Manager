import { Injectable } from '@angular/core';
import { TreeContext, TreeModel } from '@siemens/ix';
import { BehaviorSubject } from 'rxjs';


type TreeData = {
  name: string;
  icon: string;
  description?: string;
};

@Injectable({                                         //////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11 burda kaldın
  providedIn: 'root'
})
/**
 * This class's purpose is to share data between components. It is taking a number from
 * a component and sending it to another component without having a parent/child relationship.
 */
export class SharedDataService {
  context: TreeContext = {};
  model: TreeModel<TreeData> = {
    root: {
      id: 'root',
      data: {
        icon: '',
        name: '',
        
      },
      hasChildren: true,
      children: [],
  }};



  private numberSource = new BehaviorSubject<number>(0);

  private dataSource = new BehaviorSubject<any>(null);
  
  currentNumber = this.numberSource.asObservable();
  aTree = this.dataSource.asObservable();
  
  changeNumber(number: number) {
    this.numberSource.next(number);
  }

  changeTree(tree: TreeModel<TreeData>) {
    this.dataSource.next(tree);
  }
}
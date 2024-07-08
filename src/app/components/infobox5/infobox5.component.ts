import { Component, Input } from '@angular/core';
import { IxModule } from '@siemens/ix-angular';
import { TreeContext, TreeModel } from '@siemens/ix';
import { SharedDataService } from '../shared.service';
import { CommonModule } from '@angular/common';

type TreeData = {
  name: string;
  icon: string;
  description?: string;
};


interface TreeNode<T> {
  id: string;
  data: T;
  hasChildren: boolean;
  children: string[];
}


@Component({
  selector: 'app-infobox5',
  standalone: true,
  imports: [IxModule, CommonModule],
  templateUrl: './infobox5.component.html',
  styleUrls: ['./infobox5.component.css',
    '../../app.component.css'
  ]
})

/**
 * This class has a TreeModel to be displayed with IX elements, tree will have it's datatype from the TreeData interface. 
 * The tree will have a root node, a sample node, if needed it can have also a sample child node and a sample grandchild node.
 * 
 */

export class Infobox5Component {
  context: TreeContext = {};
  flag: number = 0;
  sortIcon: string = 'list';
  model: TreeModel<TreeData> = {
    root: {
      id: 'root',
      data: {
        icon: '',
        name: '',
        
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Building 1',
        icon: 'home',
        description: 'I have 2 floor and 3 rooms',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Floor 1',
        icon: 'arrow-down',
      },
      hasChildren: true,
      children: ['sample-grandchild-1','sample-grandchild-2','sample-grandchild-3'],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Floor 2',
        icon: 'anomaly',
      },
      hasChildren: false,
      children: [],
    },
    'sample-grandchild-1': {
      id: 'sample-grandchild-1',
      data: {
        name: 'Room 1',
        icon: 'applications',
      },
      hasChildren: false,
      children: [],
    },
    'sample-grandchild-2': {
      id: 'sample-grandchild-2',
      data: {
        name: 'Room 2',
        icon: 'applications',
      },
      hasChildren: false,
      children: [],
    },
    'sample-grandchild-3': {
      id: 'sample-grandchild-3',
      data: {
        name: 'Room 3',
        icon: 'applications',
      },
      hasChildren: false,
      children: [],
    },
  };

  treeModelToArray<T extends { name: string }>(model: TreeModel<T>): Array<TreeNode<T>> {
  const result: Array<TreeNode<T>> = [];

  function traverse(node: TreeNode<T>) {
  
    result.push(node);
    if (node.hasChildren) {
      node.children.forEach(childId => {
        traverse(model[childId]);
      });
    }
  }

  // Start traversing from the root node
  traverse(model['sample']);
  
  return result;
}
  
resultArray = this.treeModelToArray(this.model);
namesArray = this.resultArray.map(node => node.data.name);

iconsArray = this.resultArray.map(node => node.data.icon);
orgnameArray = [...this.namesArray];

tempResultArray = [...this.resultArray];
  expandAndSelect() {
    this.context = {
      sample: {
        isSelected: false,
        isExpanded: true,
      },
      'sample-child-2': {
        isSelected: false,
        isExpanded: false,
      },
      'sample-child-1': {
        isSelected: false,
        isExpanded: true,
      },
    };
  }

  public sortProductsDesc(): void {
    this.tempResultArray = [...this.resultArray].sort((a, b) => a.data.name.localeCompare(b.data.name));
  }

  public sortProductsAsc() {
    this.tempResultArray = [...this.resultArray].sort((b, a) => a.data.name.localeCompare(b.data.name));
  }

  public sortProducts() {
  switch(this.flag) {
    case 0:
      this.sortProductsAsc();
      this.flag = 1;
      this.sortIcon = 'chevron-down-small';
      break;
    case 1:
      this.sortProductsDesc();
      this.flag = 2;
      this.sortIcon = 'chevron-up-small';
      break;
     case 2:
      this.tempResultArray = [...this.resultArray]
      this.flag = 0;
      this.sortIcon = 'list';
      break;
     default: 
        this.flag = 0;
      
}
    
  }
}

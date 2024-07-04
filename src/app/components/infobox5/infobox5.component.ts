import { Component } from '@angular/core';
import { IxModule } from '@siemens/ix-angular';
import { TreeContext, TreeModel } from '@siemens/ix';

type TreeData = {
  name: string;
  icon: string;
  description?: string;
};

@Component({
  selector: 'app-infobox5',
  standalone: true,
  imports: [IxModule],
  templateUrl: './infobox5.component.html',
  styleUrls: ['./infobox5.component.css',
    '../../app.component.css'
  ]
})
export class Infobox5Component {
  context: TreeContext = {};
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
        name: 'Main',
        icon: 'arrow-right-down',
        description: 'I have one child and one grandchild',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
        icon: 'arrow-down',
      },
      hasChildren: true,
      children: ['sample-grandchild-1'],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
        icon: 'anomaly',
      },
      hasChildren: false,
      children: [],
    },
    'sample-grandchild-1': {
      id: 'sample-grandchild-1',
      data: {
        name: 'Sample Grandchild 1',
        icon: 'applications',
      },
      hasChildren: false,
      children: [],
    },
  };

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
}

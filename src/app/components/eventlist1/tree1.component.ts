import { NgModule, Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

interface TreeNode {
  name: string;
  children?: TreeNode[];
  expanded?: boolean;
}

@Component({
  selector: 'app-tree1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <ng-container *ngFor="let node of nodes">
        <li>
          <span (click)="toggleNode(node)">{{ node.name }}</span>
          <app-tree1 *ngIf="node.children && node.expanded" [nodes]="node.children"></app-tree1>
        </li>
      </ng-container>
    </ul>
  `,
  styles: [
    `
      ul {
        list-style-type: none;
        padding-left: 20px;
      }
      li > span {
        cursor: pointer;
        user-select: none;
      }
      li > span:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class Tree1Component {
  @Input() nodes: TreeNode[] = [];

  toggleNode(node: TreeNode) {
    node.expanded = !node.expanded;
  }
}

@Component({
  selector: 'app-roota',
  template: `
    <h1>Tree Component</h1>
    <app-tree1 [nodes]="treeData"></app-tree1>
  `,
})
export class AppComponent {
  treeData: TreeNode[] = [
    {
      name: 'Parent 1',
      children: [
        {
          name: 'Child 1',
          children: [
            { name: 'Grandchild 1' },
            { name: 'Grandchild 2' },
          ],
        },
        { name: 'Child 2' },
      ],
    },
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    Tree1Component,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

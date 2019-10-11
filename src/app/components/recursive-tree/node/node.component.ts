import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Node } from '../../../modules/types';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})

export class NodeComponent implements OnInit {
  edit: boolean = false;
  hasChildren: boolean;
  areChildrenOpen = false;
  @Input() hasParent: boolean;
  @Input() node: Node;
  @Input() parent: Node;
  @Input() tree: Node[];
  @Output() toggleClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.hasChildren = this.node.children ? this.node.children.length > 0 || this.node.type === "child" || this.node.type === "parent" : false;
  }

  toggleChildren() {
    this.areChildrenOpen = !this.areChildrenOpen;
  }

  delete(folder: Node, node: Node) {
    const tree = this.tree;
    folder.children.splice(folder.children.indexOf(node), 1);
    localStorage.setItem('storageData', JSON.stringify({ tree }));
  }

  editName() {
    this.edit = !this.edit;
    const tree = this.tree;
    if (this.edit === false) {
      localStorage.setItem('storageData', JSON.stringify({ tree }));
    }
  }

}
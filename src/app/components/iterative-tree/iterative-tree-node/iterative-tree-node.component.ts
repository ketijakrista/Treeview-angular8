import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { INode } from '../../../modules/types';

@Component({
  selector: 'app-iterative-tree-node',
  templateUrl: './iterative-tree-node.component.html',
  styleUrls: ['./iterative-tree-node.component.scss']
})
export class IterativeTreeNodeComponent implements OnInit {
  edit: boolean = false;
  isOpen: boolean = false;
  @Output() open = new EventEmitter<boolean>();
  @Output() nodeToDelete = new EventEmitter<INode>();
  @Output() newNodeName = new EventEmitter<string>();
  @Output() wasEdited = new EventEmitter<string>();
  @Input() depth: number;
  @Input() node: INode;
  constructor() { }

  ngOnInit() {
  }

  openNode() {
    this.isOpen = !this.isOpen
    this.open.emit(this.isOpen);
  }

  editName(name: string) {
    this.edit = !this.edit
    if (this.edit === false) {
      this.wasEdited.emit(name)
    }
  }

  delete(node: INode) {
    this.nodeToDelete.emit(node);
  }

  add(name: string) {
    this.newNodeName.emit(name);
  }

}

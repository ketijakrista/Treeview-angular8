import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../../../modules/types';

@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.scss']
})

export class AddNodeComponent implements OnInit {
  [x: string]: any;
  @Input() node: Node;
  @Input() tree: Node[];

  constructor() { }

  ngOnInit() {
  }
  add(newValue: string, node: Node) {
    const tree = this.tree
    if (node.type === "parent") {
      node.children.push({ name: newValue, type: "child", children: [] })
      localStorage.setItem('storageData', JSON.stringify({ tree }))
    } else {
      node.children.push({ name: newValue, type: "subchild", children: [] })
    }
  }

}

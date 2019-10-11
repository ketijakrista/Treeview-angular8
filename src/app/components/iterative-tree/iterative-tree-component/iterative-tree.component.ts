import { Component, OnInit } from '@angular/core';
import { INode } from '../../../modules/types';

@Component({
  selector: 'app-iterative-tree',
  templateUrl: './iterative-tree.component.html',
  styleUrls: ['./iterative-tree.component.scss']
})
export class IterativeTreeComponent implements OnInit {
  storageTree: INode[] = []
  iterativeTree: INode[] = [
    {
      name: "Parent #1",
      depth: 0
    },
    {
      name: "Child #1",
      depth: 1
    },
    {
      name: "Child #2",
      depth: 1
    },
    {
      name: "Parent #2",
      depth: 0
    },
    {
      name: "Child #1",
      depth: 1
    },
    {
      name: "Subchild #1",
      depth: 2
    },
    {
      name: "Subchild #2",
      depth: 2
    },
    {
      name: "Child #2",
      depth: 1
    }
  ];

  shownTree: INode[] = [];

  constructor() { }

  ngOnInit() {
    this.storageTree = JSON.parse(localStorage.getItem('iterativeData'))
    if (this.storageTree !== null) {
      this.iterativeTree = [...this.storageTree];
    }
    this.shownTree = [...this.iterativeTree.filter(it => it.depth === 0)];
  }

  onOpen(open: boolean, node: INode) {
    const index = this.iterativeTree.indexOf(node);
    const depth = node.depth;
    const children: INode[] = [];
    const indexInShownArr = this.shownTree.indexOf(node);
    let count = 0;
    if (open === true) {
      for (let i = index + 1; i < this.iterativeTree.length; i++) {
        if (this.iterativeTree[i].depth === depth + 1) {
          children.push(this.iterativeTree[i])
        } else if (this.iterativeTree[i].depth === depth) {
          break;
        }
      }
      this.shownTree.splice(indexInShownArr + 1, 0, ...children);
    } else {
      for (let i = indexInShownArr + 1; i < this.shownTree.length; i++) {
        if (this.shownTree[i].depth > depth) {
          count++;
        } else if (this.shownTree[i].depth === depth) {
          break;
        }
      }
      this.shownTree.splice(indexInShownArr + 1, count);
    }
  }

  onDelete(node: INode) {
    const index = this.iterativeTree.indexOf(node);
    const indexInShownArr = this.shownTree.indexOf(node);
    this.shownTree.splice(indexInShownArr, 1);
    this.iterativeTree.splice(index, 1);
    const tree = this.iterativeTree;
    localStorage.setItem('iterativeData', JSON.stringify(tree));
  }

  onAdd(name: string, node: INode) {
    const index = this.iterativeTree.indexOf(node);
    let depth = node.depth;
    let indexToSplice = index;
    for (let i = index; i < this.iterativeTree.length; i++) {
      if (this.iterativeTree[i].depth === depth + 1) {
        indexToSplice++;
      }
    }
    this.iterativeTree.splice(indexToSplice - 1, 0, { name: name, depth: depth + 1 });
    const tree = this.iterativeTree;
    localStorage.setItem('iterativeData', JSON.stringify(tree));
  }

  onEdit(name: string, node: INode) {
    const index = this.iterativeTree.indexOf(node);
    this.iterativeTree[index].name = name;
    const tree = this.iterativeTree;
    localStorage.setItem('iterativeData', JSON.stringify(tree));
  }

}

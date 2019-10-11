import { Component, OnInit } from '@angular/core';
import { Node } from '../../../modules/types';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})


export class TreeComponent implements OnInit {
  storageTree: { tree: Node[] } = { tree: [] }
  isShow = false;
  TreeData: Node[] = [
    {
      name: "Element #1",
      type: "parent",
      children: []
    },
    {
      name: "Element #2",
      type: "parent",
      children: []
    },
    {
      name: "Element #3",
      type: "parent",
      children: [
        {
          name: "Child #1",
          type: "child",
          children: [
            {
              name: "SubChild #1",
              type: "subchild",
              children: []
            },
            {
              name: "SubChild #2",
              type: "subchild",
              children: []
            },
            {
              name: "SubChild #3",
              type: "subchild",
              children: []
            },
            {
              name: "SubChild #4",
              type: "subchild",
              children: []
            }
          ]
        },
        {
          name: "Child #2",
          type: "child",
          children: [
            {
              name: "SubChild #1",
              type: "subchild",
              children: []
            },
            {
              name: "SubChild #2",
              type: "subchild",
              children: []
            },
            {
              name: "SubChild #3",
              type: "subchild",
              children: []
            },
            {
              name: "SubChild #4",
              type: "subchild",
              children: []
            }
          ]
        },
        {
          name: "Child #3",
          type: "child",
          children: [
            {
              name: "SubChild #1",
              type: "subchild",
              children: []
            },
            {
              name: "SubChild #2",
              type: "subchild",
              children: []
            }
          ]
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
    this.storageTree = JSON.parse(localStorage.getItem('storageData'))
    if (this.storageTree !== null) {
      this.TreeData = this.storageTree.tree;
    }
  }

}

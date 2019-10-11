import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IterativeTreeComponent } from './iterative-tree.component';
import { IterativeTreeNodeComponent } from '../iterative-tree-node/iterative-tree-node.component';
import { FormsModule } from '@angular/forms';

import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('IterativeTreeComponent', () => {
  let component: IterativeTreeComponent;
  let fixture: ComponentFixture<IterativeTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IterativeTreeComponent, IterativeTreeNodeComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IterativeTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to delete a node', () => {
    let length = component.iterativeTree.length
    component.onDelete(component.iterativeTree[1]);
    expect(component.iterativeTree.length).toBe(length - 1)
  });

  it('should be able to add a node', () => {
    let length = component.iterativeTree.length
    component.onAdd("New node", component.iterativeTree[0]);
    expect(component.iterativeTree.length).toBe(length + 1)
    expect(component.iterativeTree[3].name).toBe("New node")
  });

  it('should be able to change a nodes name', () => {
    component.onEdit("New name", component.iterativeTree[1]);
    expect(component.iterativeTree[1].name).toBe("New name")
  });


});

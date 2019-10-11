import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNodeComponent } from './add-node.component';
import { TreeComponent } from '../tree-component/tree.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AddNodeComponent', () => {
  let component: AddNodeComponent;
  let fixture: ComponentFixture<AddNodeComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddNodeComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const initialTree = new TreeComponent();
    fixture = TestBed.createComponent(AddNodeComponent);
    component = fixture.componentInstance;
    component.tree = initialTree.TreeData
    component.node = component.tree[0]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to add a new node', () => {
    expect(component.node.children.length).toBe(0)
    component.add("New node", component.node)
    expect(component.node.children.length).toBe(1)
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NodeComponent } from './node.component';
import { AddNodeComponent } from '../add-node/add-node.component';
import { TreeComponent } from '../tree-component/tree.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NodeComponent', () => {
  let component: NodeComponent;
  let fixture: ComponentFixture<NodeComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NodeComponent, AddNodeComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const initialTree = new TreeComponent();
    fixture = TestBed.createComponent(NodeComponent);
    component = fixture.componentInstance;
    component.tree = initialTree.TreeData;
    component.parent = component.tree[2];
    component.node = component.tree[2].children[0];
    component.hasParent = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to delete node', () => {
    expect(component.parent.children.length).toBe(3);
    component.delete(component.parent, component.node)
    expect(component.parent.children.length).toBe(2);
  });

  it('should be able to enter edit mode for node name', () => {
    expect(component.edit).toBe(false);
    component.editName();
    expect(component.edit).toBe(true);
  });

});
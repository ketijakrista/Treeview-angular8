import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IterativeTreeNodeComponent } from './iterative-tree-node.component';
import { IterativeTreeComponent } from '../iterative-tree-component/iterative-tree.component'
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('IterativeTreeNodeComponent', () => {
  let component: IterativeTreeNodeComponent;
  let fixture: ComponentFixture<IterativeTreeNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IterativeTreeNodeComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const tree = new IterativeTreeComponent();
    fixture = TestBed.createComponent(IterativeTreeNodeComponent);
    component = fixture.componentInstance;
    component.depth = tree.iterativeTree[0].depth;
    component.node = tree.iterativeTree[0]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

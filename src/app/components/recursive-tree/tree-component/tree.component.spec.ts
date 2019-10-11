import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TreeComponent } from './tree.component';
import { NodeComponent } from '../node/node.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NodeComponent, TreeComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
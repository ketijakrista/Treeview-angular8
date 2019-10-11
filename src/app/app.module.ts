import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';

import { TreeComponent } from './components/recursive-tree/tree-component/tree.component';
import { AddNodeComponent } from './components/recursive-tree/add-node/add-node.component';
import { NodeComponent } from './components/recursive-tree/node/node.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAngleDown, faPen, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IterativeTreeComponent } from './components/iterative-tree/iterative-tree-component/iterative-tree.component';
import { IterativeTreeNodeComponent } from './components/iterative-tree/iterative-tree-node/iterative-tree-node.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    AddNodeComponent,
    NodeComponent,
    IterativeTreeComponent,
    IterativeTreeNodeComponent,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    StorageServiceModule
  ],
  exports: [
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faAngleRight, faAngleDown, faPen, faCheck, faTrash);
  }
}

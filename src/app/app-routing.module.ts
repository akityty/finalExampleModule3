import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookEdiComponent} from './book-edi/book-edi.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';


const routes: Routes = [{
  path: 'book',
  component: BookListComponent
}, {
  path: 'book/:id',
  component: BookDetailComponent
}, {
  path: 'createNewBook',
  component: BookCreateComponent
}, {
  path: 'book/:id/edit',
  component: BookEdiComponent
},
  {
    path: 'book/:id/delete',
    component: BookDeleteComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

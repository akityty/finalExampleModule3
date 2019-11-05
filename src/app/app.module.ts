import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEdiComponent } from './book-edi/book-edi.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookEdiComponent,
    BookCreateComponent,
    BookDeleteComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

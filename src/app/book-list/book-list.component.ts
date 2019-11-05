import {Component, OnInit} from '@angular/core';
import {Book} from '../book.interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];
  bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.bookService.getBookList().subscribe(next => (this.bookList = next), error => (this.bookList = []));
  }

}

import { Component, OnInit } from '@angular/core';
import {Book} from '../book.interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {
  book: Book;
  data: FormGroup;
  message: string;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(next => {
      this.book = next;
    }, error => {
      alert('Thao tac khong thanh cong');
    });
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(next => {
      this.message = 'Xoa thanh cong';
    }, error => {
      this.message = 'Xoa khong thanh cong';
    });

  }
}

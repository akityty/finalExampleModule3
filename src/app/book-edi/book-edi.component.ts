import {Component, OnInit} from '@angular/core';
import {Book} from '../book.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-edi',
  templateUrl: './book-edi.component.html',
  styleUrls: ['./book-edi.component.scss']
})
export class BookEdiComponent implements OnInit {
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
    this.data = this.fb.group({
      id: '',
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
      next => {
        this.book = next;
        this.data.patchValue(this.book);
      },
      error => {
        this.book = null;
      }
    );
  }
  editBook() {
    this.bookService.updateBook(this.data.value).subscribe(next => {
      this.message = 'Sua thanh cong';
    }, error => {
      this.message = 'Sua that bai';
    });
  }

}

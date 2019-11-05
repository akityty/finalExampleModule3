import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book.interface';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  data: FormGroup;
  message: string;

  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router) {
  }

  ngOnInit() {
    this.data = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }
  addNewBook() {
    this.bookService.createNewBook(this.data.value).subscribe(next => {
      this.message = 'ok';
    }, error => {
      this.message = 'error';
    });
  }

}

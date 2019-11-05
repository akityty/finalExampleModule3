import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = ' http://localhost:3000/books';

  constructor(private http: HttpClient) {
  }

  getBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.API_URL}/${id}`);
  }
  createNewBook(book: Partial<Book>): Observable<Book> {
    return this.http.post<Book>(this.API_URL, book);
  }
  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.API_URL}/${book.id}`, book);
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);

  }
}


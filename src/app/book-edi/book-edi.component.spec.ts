import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEdiComponent } from './book-edi.component';

describe('BookEdiComponent', () => {
  let component: BookEdiComponent;
  let fixture: ComponentFixture<BookEdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

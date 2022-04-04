import { Component, Input, OnInit } from '@angular/core';
import { BookApiService } from '../services/book-api.service';
import { IBook, Book } from '../interfaces/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookApiService]
})

export class BookComponent implements OnInit {


  booksData?:IBook[];
  @Input() bookData?:IBook;


  constructor(private _bookAPIService:BookApiService) { }
  
  ngOnInit(){
  }



}

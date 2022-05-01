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

  //Adds the book, along with the review and rating to the database
  // addBookToDatabase( review:string, rating:string)
  // {
  //     //Construct a new book
  //     let book:IBook = new Book(
  //                                 title,
  //                                 author,
  //                                 publisher,
  //                                 yearPublished,
  //                                 description,
  //                                 isbn,
  //                                 coverArt
  //     );
  //     //Send this book to the API service to be added to the DB.
  //     this._bookAPIService.addBookData(book);
  // }
}

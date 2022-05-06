import { Component, Input, OnInit } from '@angular/core';
import { BookApiService } from '../services/book-api.service';
import { IBook, Book } from '../interfaces/book';
import { IReviewedBook, ReviewedBook } from '../interfaces/reviewedBook';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookApiService]
})

export class BookComponent implements OnInit {

  @Input() bookData!:IBook;

  constructor(private _bookAPIService:BookApiService) { }

  ngOnInit(){
  }

  //Adds the book, along with the review and rating to the database
  addBookToDatabase(rating:string, review:string)
  {
      //Construct a new book
      let book:IReviewedBook = new ReviewedBook(
                                  this.bookData.title,
                                  this.bookData.author,
                                  this.bookData.publisher,
                                  this.bookData.yearPublished,
                                  this.bookData.description[0],
                                  this.bookData.isbn,
                                  this.bookData.coverArt,
                                  rating,
                                  review
      );
      //Send this book to the API service to be added to the DB.
      this._bookAPIService.addBookData(book);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { BookApiService } from '../services/book-api.service';
import { ReviewApiService } from '../services/review-api.service';
import { IBook, Book } from '../interfaces/book';
import { IReview, Review } from '../interfaces/review';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookApiService]
})

export class BookComponent implements OnInit {


  booksData?:IBook[];
  @Input() bookData!:IBook;

  constructor(private _bookAPIService:BookApiService, private _reviewAPIService:ReviewApiService) { }
  
  ngOnInit(){
  }

  //Adds the book, along with the review and rating to the database
  addBookToDatabase()
  {
      //Construct a new book
      let book:IBook = new Book(
                                  this.bookData.title,
                                  this.bookData.author,
                                  this.bookData.publisher,
                                  this.bookData.yearPublished,
                                  this.bookData.description,
                                  this.bookData.isbn,
                                  this.bookData.coverArt
      );
      //Send this book to the API service to be added to the DB.
      this._bookAPIService.addBookData(book);
  }

  //Adds the book, along with the review and rating to the database
  addReviewToDatabase(bookId:string, rating:string, review:string)
  {
      //Construct a new book
      let newReview:IReview = new Review(
                                 bookId,
                                 rating,
                                 review
      );
      //Send this book to the API service to be added to the DB.
      this._reviewAPIService.addreviewData(newReview);
      //Add the book to the database also
      this.addBookToDatabase();
  }
}

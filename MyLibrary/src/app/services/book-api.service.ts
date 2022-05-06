import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {AngularFirestoreCollection, AngularFirestore} from "@angular/fire/compat/firestore";
import { IReviewedBook} from '../interfaces/reviewedBook';


@Injectable()

export class BookApiService implements OnInit{

  booksDataCollection:AngularFirestoreCollection<IReviewedBook>;

  booksData!:Observable<IReviewedBook[]>;

  errorMessage?:string;

  constructor(private _http:HttpClient, private _afs:AngularFirestore)
  {
    this.booksDataCollection = _afs.collection<IReviewedBook>("books_data", ref => ref.orderBy('title', 'asc'));
  }

  ngOnInit()
  {

  }

  //Adds a new book to the database
  addBookData(book:IReviewedBook):void
  {
      this.booksDataCollection.add(JSON.parse(JSON.stringify(book, function(k, v) {
        if (v === undefined) { return null; } return v;
     })));
  }

  //Deletes a book of a given id from the database
  deleteBookData(bookId:string):void
  {
        this.booksDataCollection.doc(bookId).delete();
  }

  //Gets a list of books from the database
  getBookData():Observable<IReviewedBook[]>
  {
    //Connect to the db
    this.booksData = this.booksDataCollection.valueChanges({idField:`id`});
    this.booksData.subscribe(
      data=> console.log("getBooksData" + JSON.stringify(data, function(k, v) {
        if (v === undefined) { return null; } return v;
     })));
    //Return the book data from the database
    return this.booksData;
  }

  //Updates a book of given id
  updateBook(id:string, book:IReviewedBook)
  {

    //update the book
    this.booksDataCollection.doc(id).update(
      {
        title: book.title,
        author: book.author,
        publisher: book.publisher,
        yearPublished: book.yearPublished,
        description: book.description,
        isbn: book.isbn,
        coverArt: book.coverArt,
        rating: book.rating,
        review: book.review
      });
  }

  //Gracefully handle any errors
  private handleError (err:HttpErrorResponse)
   {
     console.log('BookApiService: ' + err.message);
     return throwError(err.message);
   }
}

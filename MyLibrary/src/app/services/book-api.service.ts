import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import {AngularFirestoreCollection, AngularFirestore} from "@angular/fire/compat/firestore";
import { IReviewedBook, ReviewedBook } from '../interfaces/reviewedBook';
import { jsDocComment } from '@angular/compiler';
import { NgxSpinner } from 'ngx-spinner';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()

export class BookApiService {

  booksDataCollection:AngularFirestoreCollection<IReviewedBook>;

  booksData?:Observable<IReviewedBook[]>;

  allBooksData?:IReviewedBook[];

  errorMessage?:string;

  constructor(private _http:HttpClient, private _afs:AngularFirestore, private spinner:NgxSpinnerService) 
  { 
    this.booksDataCollection = _afs.collection<IReviewedBook>("books_data");
  }

  //Adds a new book to the database
  addBookData(book:IReviewedBook):void
  {
      this.booksDataCollection.add(JSON.parse(JSON.stringify(book)));
  }

  //Deletes a book of a given id from the database
  deleteBookData(bookId:string):void
  {
        this.booksDataCollection.doc(bookId).delete();
  }

  //Gets a list of books from the database
  getBookData():Observable<IReviewedBook[]>
  {
    this.spinner.show();
    //Connect to the db
    this.booksData = this.booksDataCollection.valueChanges({idField:`id`});
    this.booksData.subscribe(
      data=> console.log("getBooksData" + JSON.stringify(data))
    )
      this.spinner.hide();
    //Return the book data from the database
    return this.booksData;
  }

  //Gracefully handle any errors
  private handleError (err:HttpErrorResponse)
   {
     console.log('BookApiService: ' + err.message);
     return throwError(err.message);
   }
}

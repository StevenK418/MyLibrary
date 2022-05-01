import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import {AngularFirestoreCollection, AngularFirestore} from "@angular/fire/compat/firestore";
import { IBook, IBookAPI } from '../interfaces/book';
import { jsDocComment } from '@angular/compiler';


@Injectable()

export class BookApiService {

  booksDataCollection:AngularFirestoreCollection<IBook>;

  booksData?:Observable<IBook[]>;

  allBooksData?:IBook[];

  errorMessage?:string;

  constructor(private _http:HttpClient, private _afs:AngularFirestore) 
  { 
    this.booksDataCollection = _afs.collection<IBook>("books_data");
  }

  //Adds a new book to the database
  addBookData(book:IBook):void
  {
      this.booksDataCollection.add(JSON.parse(JSON.stringify(book)));
  }

  //Deletes a book of a given id from the database
  deleteBookData(bookId:string):void
  {
        this.booksDataCollection.doc(bookId).delete();
  }

  //Gets a list of books from the database
  getBookData():Observable<IBook[]>
  {
    //Connect to the db
    this.booksData = this.booksDataCollection.valueChanges({idField:`id`});
    this.booksData.subscribe(
      data=> console.log("getBooksData" + JSON.stringify(data))
    )

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

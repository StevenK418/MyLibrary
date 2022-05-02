import { Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import {AngularFirestoreCollection, AngularFirestore} from "@angular/fire/compat/firestore";
import { IBook } from '../interfaces/book';

@Injectable()

export class RecentSearchesApiService {

  recentSearchesDataCollection:AngularFirestoreCollection<IBook>;

  searchedBooksData?:Observable<IBook[]>;

  errorMessage?:string;

  constructor(private _http:HttpClient, private _afs:AngularFirestore) 
  { 
    this.recentSearchesDataCollection = _afs.collection<IBook>("recent_search_data");
  }

   //Gets a list of books from the database
   getSearchedBookData():Observable<IBook[]>
   {
     debugger
     //Connect to the db
     this.searchedBooksData = this.recentSearchesDataCollection.valueChanges({idField:`id`});
     this.searchedBooksData.subscribe(
       data=> console.log("getBooksData" + JSON.stringify(data))
     )
     debugger
     //Return the book data from the database
     return this.searchedBooksData;
   }

   //Adds a new book to the database
  addBookData(book:IBook):void
  {
      this.recentSearchesDataCollection.add(JSON.parse(JSON.stringify(book)));
  }

  //Deletes a book of a given id from the database
  deleteBookData(bookId:string):void
  {
      this.recentSearchesDataCollection.doc(bookId).delete();
  }

  //Gracefully handle any errors
  private handleError (err:HttpErrorResponse)
   {
     console.log('Recent-Searches-ApiService: ' + err.message);
     return throwError(err.message);
   }
}
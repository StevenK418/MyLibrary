import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { IBook, Book, IBookAPI} from '../interfaces/book';
import { __generator } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryAPIService {

  private _siteUrl="https://openlibrary.org/search.json?q="
  private _isbnSearchURL="https://openlibrary.org/isbn/";

  constructor(private _http:HttpClient) {}

  //Gets a list of books of a given title from the api
  getBookData(bookTitle: string):Observable<IBookAPI>
  {
    console.log(this._siteUrl + bookTitle);
    return this._http.get<IBookAPI>(this._siteUrl + bookTitle)
    .pipe(
      tap(data => console.log('Bookdata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }
  
  //Searches the api for a given isbn
  getBookDataByIsbn(isbn?:string):Observable<IBookAPI>
  {
    console.log(this._isbnSearchURL + isbn);
    return this._http.get<IBookAPI>(this._isbnSearchURL + isbn + ".json")
    .pipe(
      tap(data => console.log('Bookdata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }
  

  //Handles any errors receieved in the response
  private handleError(err:HttpErrorResponse)
  {
    console.log("OpenLibraryAPIService: " + err.message);
    return throwError("error : " + err.message);
  }
}

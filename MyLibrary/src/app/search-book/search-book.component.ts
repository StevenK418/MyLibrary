import { Component, OnInit } from '@angular/core';
import { OpenLibraryAPIService } from '../services/open-library-api.service';
import { RecentSearchesApiService } from '../services/recent-searches-api.service';
import { Book, IBook, IBookAPI} from '../interfaces/book';
import { IISBNResult } from '../interfaces/ISBNResult';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css'],
  providers: [
                [OpenLibraryAPIService],
                [RecentSearchesApiService]
              ]
})

export class SearchBookComponent implements OnInit
{
  bookData?:IBookAPI;
  isbnBookData!:IISBNResult;

  errorMessage:any;

  currentBook!:IBook;

  //Test API code
  constructor(private _openLibraryService:OpenLibraryAPIService, private _RecentSearchAPIsService:RecentSearchesApiService){}

  ngOnInit(){

  }

  //Retrieves a book of a given title from the API
  getBooksDetails(bookTitle:string):boolean
  {
      //Get the current timestamp (used for sorting data in Firestore)
      let currentDateTime = new Date().getTime();
      console.log(currentDateTime);


      this._openLibraryService.getBookData(bookTitle).subscribe(
        bookData=> {
          this.bookData = bookData;
            this.currentBook = new Book(
                                          this.bookData.docs[0].title,
                                          this.bookData.docs[0].author_name[0],
                                          this.bookData.docs[0].publisher[0],
                                          this.bookData.docs[0].publish_date[0],
                                          this.bookData.docs[0].first_sentence,
                                          this.bookData.docs[0].isbn[0],
                                          this.getBookCover(this.bookData.docs[0].isbn[0]),
                                          new Date().getTime()
                                        );
        },
        error => this.errorMessage = <any>error
      );
      //Add the newly searched book to the db
      this._RecentSearchAPIsService.addBookData(this.currentBook);
      return false;
  }

  //Constructs an image URL using the ibsn and returns it
  getBookCover(isbn:string):string
  {
      //Construct url for the book cover image endpoint
      let image:string = "https://covers.openlibrary.org/b/isbn/" + isbn + "-L.jpg"
      return image;
  }

  //Retrieves a book with a given ISBN from the API
  getBookDetailsByIsbn(isbn:string):boolean
  {
      this._openLibraryService.getBookDataByIsbn(isbn).subscribe(
        bookData=>
        {
          this.isbnBookData = bookData;
          this.currentBook = new Book(
                                          this.isbnBookData.title,
                                          'NO author found',
                                          this.isbnBookData.publishers[0],
                                          this.isbnBookData.publish_date,
                                          'No Description available',
                                          this.isbnBookData.isbn_10,
                                          this.getBookCover(this.isbnBookData.isbn_10),
                                          new Date().getTime()
                                      );
                    },
          error => this.errorMessage = <any>error
          );
          //Add the newly searched book to the db
          this._RecentSearchAPIsService.addBookData(this.currentBook);
          return false;
    }
}

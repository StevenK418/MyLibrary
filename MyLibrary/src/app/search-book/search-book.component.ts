import { Component, OnInit } from '@angular/core';
import { OpenLibraryAPIService } from '../services/open-library-api.service';
import { Book, IBook, IBookAPI} from '../interfaces/book';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css'],
  providers: [OpenLibraryAPIService]
})

export class SearchBookComponent implements OnInit 
{
  bookData?:IBookAPI;
 
  errorMessage:any;

  //Store all response objects in here
  books?:IBook[];

  currentBook!:IBook;

  //Test API code
  constructor(private _openLibraryService:OpenLibraryAPIService)
  {
      
  }

  ngOnInit(){
    
  }

  //Test Code
  getBooksDetails(bookTitle:string):boolean
  {
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
                                          this.getBookCover(this.bookData.docs[0].isbn[0])
                                        );                            
        },
        error => this.errorMessage = <any>error
      );
      return false;
  }

  //Constructs an image URL using the ibsn and returns it
  getBookCover(isbn:string):string
  {
      //Construct url for the book cover image endpoint
      let image:string = "https://covers.openlibrary.org/b/isbn/" + isbn + "-L.jpg"
      return image;
  }

  getBookDetailsByIsbn(isbn:string):boolean
  {
      // this._openLibraryService.getBookDataByIsbn(isbn).subscribe(
      //   bookData=> {
      //     this.bookData = bookData;
      //     console.log("Book Name: " + this.bookData.title);
      //   },
      //   error => this.errorMessage = <any>error
      // );

      return false;
  }

  
}

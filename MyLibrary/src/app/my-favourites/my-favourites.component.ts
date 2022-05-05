import { Component, OnInit} from '@angular/core';
import { BookApiService } from '../services/book-api.service';
import { IReviewedBook } from '../interfaces/reviewedBook';

@Component({
  selector: 'app-my-favourites',
  templateUrl: './my-favourites.component.html',
  styleUrls: ['./my-favourites.component.css'],
  providers: [BookApiService]
})
export class MyFavouritesComponent implements OnInit {

  reviewsData?:IReviewedBook[];

  show?:boolean;
  selectedID?:number;

  constructor(private _bookAPIService:BookApiService)
  {

  }

  ngOnInit()
  {
    this._bookAPIService.getBookData().subscribe(bookData => {this.reviewsData = bookData});
  }

  deleteBook(bookId:string)
  {
    this._bookAPIService.deleteBookData(bookId);
  }

   //Adds the book, along with the review and rating to the database
   addBookToDatabase(bookObject:IReviewedBook, rating:string, review:string)
   {
      //  //Construct a new book
      //  let book:IReviewedBook = new ReviewedBook(
      //                              bookObject.title,
      //                              bookObject.author,
      //                              bookObject.publisher,
      //                              bookObject.yearPublished,
      //                              bookObject.description,
      //                              bookObject.isbn,
      //                              bookObject.coverArt,
      //                              rating,
      //                              review
      //  );
      //  //Send this book to the API service to be added to the DB.
      //  this._bookAPIService.addBookData(book);
   }


  //Shows a specific form
  showForm(buttonId:number)
  {
      this.selectedID = buttonId;
      this.show = !this.show;
  }

}

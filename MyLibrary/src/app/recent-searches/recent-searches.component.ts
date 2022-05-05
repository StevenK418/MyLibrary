import { Component, OnInit} from '@angular/core';
import { IBook } from '../interfaces/book';
import { RecentSearchesApiService } from '../services/recent-searches-api.service';
import { IReviewedBook, ReviewedBook } from '../interfaces/reviewedBook';
import { BookApiService } from '../services/book-api.service';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.css'],
  providers: [[RecentSearchesApiService], [BookApiService]]
})

export class RecentSearchesComponent implements OnInit {

  recentSearches?:IBook[];

  show?:boolean;
  selectedID?:number;

  constructor(private _recentSearchAPIService: RecentSearchesApiService, private _bookAPIService:BookApiService) { }

  ngOnInit()
  {
    this._recentSearchAPIService.getSearchedBookData().subscribe(recentSearchData => {this.recentSearches = recentSearchData});
  }

  //Adds the book, along with the review and rating to the database
  addBookToDatabase(bookObject:IBook, rating:string, review:string)
  {
      //Construct a new book
      let book:IReviewedBook = new ReviewedBook(
                                  bookObject.title,
                                  bookObject.author,
                                  bookObject.publisher,
                                  bookObject.yearPublished,
                                  bookObject.description,
                                  bookObject.isbn,
                                  bookObject.coverArt,
                                  rating,
                                  review
      );
      //Send this book to the API service to be added to the DB.
      this._bookAPIService.addBookData(book);
  }

  //Shows a specific form
  showForm(buttonId:number)
  {
      this.selectedID = buttonId;
      this.show = !this.show;
  }
}

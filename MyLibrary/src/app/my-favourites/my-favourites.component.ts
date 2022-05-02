import { Component, OnInit } from '@angular/core';
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
  
  constructor(private _bookAPIService:BookApiService) {}

  ngOnInit()
  {
    this._bookAPIService.getBookData().subscribe(reviewsData => {this.reviewsData = reviewsData});
  }

  deleteBook(bookId:string)
  {
    this._bookAPIService.deleteBookData(bookId);
  }

}

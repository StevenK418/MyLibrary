import { Component, OnInit } from '@angular/core';
import { ReviewApiService } from '../services/review-api.service';
import { Review, IReview } from '../interfaces/review';

@Component({
  selector: 'app-my-favourites',
  templateUrl: './my-favourites.component.html',
  styleUrls: ['./my-favourites.component.css']
})
export class MyFavouritesComponent implements OnInit {

  reviewsData?:IReview[];
  
  constructor(private _reviewAPIService:ReviewApiService) {}

  ngOnInit(): void 
  {
    this._reviewAPIService.getreviewData().subscribe(reviewsData => {this.reviewsData = reviewsData});
  }

}

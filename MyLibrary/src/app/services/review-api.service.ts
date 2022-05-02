import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import {AngularFirestoreCollection, AngularFirestore} from "@angular/fire/compat/firestore";
import { IReview } from '../interfaces/review';

import { jsDocComment } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ReviewApiService {

  reviewsDataCollection:AngularFirestoreCollection<IReview>;
  reviewsData?:Observable<IReview[]>;
  errorMessage?:string;

  constructor(private _http:HttpClient, private _afs:AngularFirestore) 
  { 
    this.reviewsDataCollection = _afs.collection<IReview>("reviews_data");
  }

   //Adds a new review to the database
   addreviewData(review:IReview):void
   {
       this.reviewsDataCollection.add(JSON.parse(JSON.stringify(review)));
   }

   //Deletes a review of a given id from the database
  deletereviewData(reviewId:string):void
  {
      this.reviewsDataCollection.doc(reviewId).delete();
  }

  //Gets a list of reviews from the database
  getreviewData():Observable<IReview[]>
  {
    //Connect to the db
    this.reviewsData = this.reviewsDataCollection.valueChanges({idField:`id`});
    this.reviewsData.subscribe(
      data=> console.log("getreviewsData" + JSON.stringify(data))
    )

    //Return the review data from the database
    return this.reviewsData;
  }

  //Gracefully handle any errors
  private handleError (err:HttpErrorResponse)
   {
     console.log('reviewApiService: ' + err.message);
     return throwError(err.message);
   }
}

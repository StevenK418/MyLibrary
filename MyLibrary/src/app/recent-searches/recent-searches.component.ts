import { Component, OnInit } from '@angular/core';
import { IBook } from '../interfaces/book';
import { RecentSearchesApiService } from '../services/recent-searches-api.service';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.css'],
  providers: [RecentSearchesApiService]
})
export class RecentSearchesComponent implements OnInit {

  recentSearches!:IBook[];

  constructor(private _recentSearchAPIService: RecentSearchesApiService) { }

  ngOnInit()
  {
    this._recentSearchAPIService.getSearchedBookData().subscribe(recentSearchData => {this.recentSearches = recentSearchData});
  }
}

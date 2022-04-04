import { Component, Input, OnInit } from '@angular/core';
import { BookApiService } from '../services/book-api.service';
import { IBook } from '../interfaces/book';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css'],
  providers: [BookApiService]
})
export class DisplayBookComponent implements OnInit {


  booksData?:IBook[];

  constructor(private _bookAPIService:BookApiService) { }

  ngOnInit()
  {
    this._bookAPIService.getBookData().subscribe(booksData => {this.booksData = booksData});
  }

}

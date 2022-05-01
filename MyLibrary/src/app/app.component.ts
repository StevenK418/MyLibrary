import { Component } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { OpenLibraryAPIService } from './services/open-library-api.service';
import { IBook } from './interfaces/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OpenLibraryAPIService]
})
export class AppComponent {
  title = 'MyLibrary';
  faBook = faBook;

  bookData?:IBook;
  errorMessage:any;

  //Test API code
  constructor(private _openLibraryService:OpenLibraryAPIService)
  {

  }
}

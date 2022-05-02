import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisplayBookComponent } from './display-book/display-book.component';

import { SearchBookComponent } from './search-book/search-book.component';
import { BookComponent } from './book/book.component';

import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from 'src/environments/environment.prod';
import { MyFavouritesComponent } from './my-favourites/my-favourites.component';

// Import library module
import { NgxSpinner, NgxSpinnerModule } from "ngx-spinner";
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayBookComponent,
    SearchBookComponent,
    BookComponent,
    MyFavouritesComponent,
    RecentSearchesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [NgxSpinnerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

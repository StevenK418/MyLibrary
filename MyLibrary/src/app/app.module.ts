import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    DisplayBookComponent,
    SearchBookComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

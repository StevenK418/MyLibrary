import { NgModule} from '@angular/core';
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
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DisplayBookComponent,
    SearchBookComponent,
    BookComponent,
    MyFavouritesComponent,
    RecentSearchesComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

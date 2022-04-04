import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisplayBookComponent } from './display-book/display-book.component';
import { SearchBookComponent } from './search-book/search-book.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayBookComponent,
    SearchBookComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

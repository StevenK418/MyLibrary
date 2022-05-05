import { Component } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyLibrary';
  faBook = faBook;

  userName!:string;


  constructor(public _authService:AngularFireAuth)
  {
    //this.userName = _authService.user;

  }

  logOut():void{
    this._authService.signOut();
  }
}





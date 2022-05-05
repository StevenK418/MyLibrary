import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  firebaseErrorMessage?:string;

  constructor(private _afsAuthService:AuthService, private _router:Router, public _afsAuth:AngularFireAuth)
  {
      this.firebaseErrorMessage = '';
  }

  ngOnInit(): void
  {
    this.loginForm = new FormGroup({
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    });
  }

  //Logs a user in given a valid email and passowrd
  loginUser(email:string, password:string)
  {
    console.log('Login Method entered!');

    if(this.loginForm.invalid)
    {
      return;
    }
    this._afsAuthService.logInUser(email, password).then((result)=> {
      if(result==null)
      {
        this._router.navigate(['/dashboard']);
      }
      else if(result.isValid==false)
      {
          this.firebaseErrorMessage = 'Login Error:' + result.message;
      }
    }).catch(()=>{});
  }

  //Logs the user out
  logOut():void
  {
    this._afsAuth.signOut();
  }
}

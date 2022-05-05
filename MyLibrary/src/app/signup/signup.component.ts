import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup;
  firebaseErrorMessage?:string;

  constructor(private _afsAuthService:AuthService, private _router:Router, private _afsAuth:AngularFireAuth)
  {
      this.firebaseErrorMessage = '';
  }

  ngOnInit(): void
  {
    this.signupForm = new FormGroup(
    {
      'displayName': new FormControl('', Validators.required),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    });
  }

  //Signs the user up using the signup
  signUp()
  {
    console.log('signUp Method entered!');
    if(this.signupForm.invalid)
    {
      return;
    }

    this._afsAuthService.signUpUser(this.signupForm.value).then((result)=>
    {
      if(result==null)
      {
        this._router.navigate(['/dashboard']);
      }
      else if(result.isValid==false)
      {
          this.firebaseErrorMessage = result.message;
      }
    }).catch(()=>{});
  }
}

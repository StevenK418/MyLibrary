import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn!: boolean;

  constructor(private  _router: Router, private _afAuth: AngularFireAuth)
  {
    this.userLoggedIn = false;

    this._afAuth.onAuthStateChanged((user)=>
    {
      if(user)
      {
        this.userLoggedIn = true;
      }
      else{
        this.userLoggedIn = false;
      }
    });
  }



  signUpUser(user:any): Promise<any>
  {
    return this._afAuth.createUserWithEmailAndPassword(user.email, user.password)
    .then((result) =>
    {
      let emailLower = user.email.toLowerCase();
      result.user?.sendEmailVerification();
    })
    .catch(error =>
    {
      console.log('Auth service: error with signup', error);
      if(error.code)
      {
        return {isValid:false, message: error.message};
      }
      else{
        return {isValid:true, message: 'Succeeded, returned true'};
      }
    });
  }


  logInUser(email:string, password:string):Promise<any>
  {
    return this._afAuth.signInWithEmailAndPassword(email,password)
    .then(()=> {
      console.log('Auth Servive: loginUser: success');
    })
    .catch(error=> {
      console.log('Auth Service: login error....');
      console.log('error code', error.code);
      console.log('error', error);
      if(error.code)
      {
        return {isValid:false, message: error.message};
      }
      else{
        return {isValid:true, message: 'Succeeded, returned true'};
      }
    });
  }
}

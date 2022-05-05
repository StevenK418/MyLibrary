import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router:Router, private _afAuth:AngularFireAuth)
  {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;

    return new Promise((resolve, reject) => {
      this._afAuth.onAuthStateChanged((user) => {
        if(user)
        {
          resolve(true);
        }
        else{
          console.log('Auth guard: user is not logged in!');
          this._router.navigate(['/login']);
          resolve(false);
        }
      });
    });
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthState } from '../store/states/auth.state';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _store: Store, private _router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
    return this._store.select(AuthState.isAuthenticated)
      .pipe(map((isAuthenticated) => {
        if (!isAuthenticated) {
          return this._router.createUrlTree(['/auth/login']);
        }
        return isAuthenticated;
      }));
  }

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import * as fromRoot from './../app.reducer';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private _store: Store<fromRoot.State>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._store.select(fromRoot.getIsAuth).pipe(take(1));
  }

  canLoad(route: Route) {
    return this._store.select(fromRoot.getIsAuth).pipe(take(1));
  }
}

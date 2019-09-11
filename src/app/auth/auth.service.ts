import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs';
import { UIService } from '../shared/ui.service';
import { TrainingService } from '../training/training.service';
import * as fromRoot from './../app.reducer';
import { StartLoading, StopLoading } from './../shared/ui.actions';
import { AuthData } from './auth-data.model';
import { SetAuthenticated, SetUnauthenticated } from './auth.actions';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();

  constructor(
    private _router: Router,
    private _auth: AngularFireAuth,
    private _trainingService: TrainingService,
    private _uiService: UIService,
    private _store: Store<{ ui: fromRoot.State }>
  ) {}

  initAuthListener() {
    this._auth.authState.subscribe(user => {
      if (user) {
        this._store.dispatch(SetAuthenticated());
        this._router.navigate(['/training']);
      } else {
        this._trainingService.cancelSubscriptions();
        this._store.dispatch(SetUnauthenticated());
        this._router.navigate(['/login']);
      }
    });
  }

  registerUser(authData: AuthData) {
    // this._uiService.loadingStateChanged.next(true);
    this._store.dispatch(StartLoading());
    this._auth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        //   this._uiService.loadingStateChanged.next(false)
        this._store.dispatch(StopLoading());
      })
      .catch(err => {
        // this._uiService.loadingStateChanged.next(false);
        this._store.dispatch(StopLoading());

        this._uiService.showSnackbar(err.message, null, 3000);
      });
  }

  login(authData: AuthData) {
    // this._uiService.loadingStateChanged.next(true);
    this._store.dispatch(StartLoading());

    this._auth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(res => {
        //   this._uiService.loadingStateChanged.next(false)
        this._store.dispatch(StopLoading());
      })
      .catch(err => {
        // this._uiService.loadingStateChanged.next(false);
        this._store.dispatch(StopLoading());

        this._uiService.showSnackbar(err.message, null, 3000);
      });
  }

  logout() {
    this._auth.auth.signOut();
  }
}

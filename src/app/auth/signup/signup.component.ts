import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../app.reducer';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  maxDate;
  isLoading$: Observable<boolean>;

  constructor(
    private _authService: AuthService,
    private _store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.isLoading$ = this._store.select(fromRoot.getIsLoading);
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    this._authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}

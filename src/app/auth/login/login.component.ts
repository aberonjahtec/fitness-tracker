import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../app.reducer';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', { validators: [Validators.required] })
  });
  isLoading$: Observable<boolean>;

  constructor(
    private _authService: AuthService,
    private _store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.isLoading$ = this._store.select(fromRoot.getIsLoading);
  }

  onSubmit() {
    this._authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }
}

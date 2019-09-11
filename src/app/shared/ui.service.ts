import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UIService {
  constructor(private _snackbar: MatSnackBar) {}

  showSnackbar(message, action, duration) {
    this._snackbar.open(message, action, { duration });
  }
}

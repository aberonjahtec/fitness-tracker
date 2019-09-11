import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, finalize, map, mergeMap } from 'rxjs/operators';
import { UIService } from '../shared/ui.service';
import { GetRecipe, GetRecipeError, GetRecipes, GetRecipesError, GetRecipesSuccess, GetRecipeSuccess } from './program.actions';
import { ProgramService } from './program.service';

const url = 'https://www.themealdb.com/api/json/v1/1/latest.php';

@Injectable()
export class ProgramEffects {
  constructor(
    private actions$: Actions,
    private _uiService: UIService,
    private _programService: ProgramService
  ) {}

  getEffect = (action1, action2, action3, url: string) =>
    this.actions$.pipe(
      ofType(action1),
      mergeMap((data?) => {
        console.log('loader ++');

        return this._programService.getFactory(url, { id: data.id }).pipe(
          map(res => action2({ payload: res })),
          catchError(err => {
            this._uiService.showSnackbar(err.status, null, 3000);

            return of(action3());
          }),
          finalize(() => console.log('loader --'))
        );
      })
    );

  getRecipes$ = createEffect(() =>
    this.getEffect(GetRecipes, GetRecipesSuccess, GetRecipesError, url)
  );

  getRecipe$ = createEffect(() =>
    this.getEffect(GetRecipe, GetRecipeSuccess, GetRecipeError, url)
  );

  //   getRecipeLong$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(GetRecipe),
  //       mergeMap(({ id }) =>
  //         this._programService
  //           .getFactory(url, {
  //             id
  //           })
  //           .pipe(
  //             map(res => GetRecipeSuccess({ payload: res })),
  //             catchError(err => {
  //               this._uiService.showSnackbar(err.status, null, 3000);

  //               return of(GetRecipeError());
  //             })
  //           )
  //       )
  //     )
  //   );
}

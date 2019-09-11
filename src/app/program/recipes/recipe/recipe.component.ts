import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recipe } from '../../model/recipe.model';
import * as fromProgram from '../../program-reducer';
import { GetRecipe } from '../../program.actions';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe$: Observable<Recipe>;

  constructor(
    private store: Store<fromProgram.State>,
    private _activatedRoute: ActivatedRoute
  ) {
    this.recipe$ = this.store.pipe(select(fromProgram.getRecipe));
  }

  ngOnInit() {
    this.store.dispatch(
      GetRecipe({ id: this._activatedRoute.snapshot.params.id })
    );
  }
}

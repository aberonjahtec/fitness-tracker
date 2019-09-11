import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import * as fromProgram from '../program-reducer';
import { GetRecipes } from './../program.actions';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes$: Observable<Recipe[]>;

  constructor(private store: Store<fromProgram.State>) {}

  ngOnInit() {
    this.recipes$ = this.store.pipe(select(fromProgram.getRecipes));
    this.store.dispatch(GetRecipes());
  }
}

import { createReducer, on } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import { Recipe } from './model/recipe.model';
import { GetRecipeError, GetRecipesError, GetRecipesSuccess, GetRecipeSuccess } from './program.actions';

export interface ProgramState {
  recipes: Recipe[];
  recipe: Recipe;
}

export interface State extends fromRoot.State {
  program: ProgramState;
}

const initialState: ProgramState = {
  recipes: [],
  recipe: null
};

export const programReducer = createReducer(
  initialState,
  on(
    GetRecipesSuccess,
    (state, { payload }): ProgramState => ({
      ...state,
      recipes: payload['meals']
    })
  ),
  on(
    GetRecipesError,
    (state): ProgramState => ({
      ...state,
      recipes: []
    })
  ),
  on(
    GetRecipeSuccess,
    (state, { payload }): ProgramState => ({
      ...state,
      recipe: payload.meals[0]
    })
  ),
  on(
    GetRecipeError,
    (state): ProgramState => ({
      ...state,
      recipe: null
    })
  )
);

export const getRecipes = (state: State) => state.program.recipes;
export const getRecipe = (state: State) => state.program.recipe;

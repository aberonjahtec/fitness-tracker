import { createAction, props } from '@ngrx/store';
import { Recipe } from './model/recipe.model';

const GET_RECIPES = '[Program] Get Recipes';
const GET_RECIPES_SUCCESS = '[Program] Get Recipes Success';
const GET_RECIPES_ERROR = '[Program] Get Recipes Error';
const GET_RECIPE = '[Program] Get Recipe';
const GET_RECIPE_SUCCESS = '[Program] Get Recipe Success';
const GET_RECIPE_ERROR = '[Program] Get Recipe Error';

export const GetRecipes = createAction(GET_RECIPES);
export const GetRecipesSuccess = createAction(
  GET_RECIPES_SUCCESS,
  props<{ payload: Recipe[] }>()
);
export const GetRecipesError = createAction(GET_RECIPES_ERROR);
export const GetRecipe = createAction(GET_RECIPE, props<{ id: number }>());
export const GetRecipeSuccess = createAction(
  GET_RECIPE_SUCCESS,
  props<{ payload: { meals: Recipe[] } }>()
);
export const GetRecipeError = createAction(GET_RECIPE_ERROR);

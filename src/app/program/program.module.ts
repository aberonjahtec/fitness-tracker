import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { programReducer } from './program-reducer';
import { ProgramRoutingModule } from './program-routing.module';
import { ProgramEffects } from './program.effects';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  imports: [
    CommonModule,
    ProgramRoutingModule,
    HttpModule,
    SharedModule,
    StoreModule.forFeature('program', programReducer),
    EffectsModule.forFeature([ProgramEffects])
  ],
  declarations: [RecipesComponent, RecipeComponent]
})
export class ProgramModule {}

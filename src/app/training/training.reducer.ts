import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import { Exercise } from './exercise.model';
import { SetAvailableTrainings, SetFinishedTrainings, StartTraining } from './training.actions';

export interface TrainingState {
  availableExercises: Exercise[];
  finishedExercises: Exercise[];
  activeTraining: Exercise;
}

export interface State extends fromRoot.State {
  training: TrainingState;
}

const initialState: TrainingState = {
  availableExercises: [],
  finishedExercises: [],
  activeTraining: null
};

export const trainingReducer = createReducer(
  initialState,
  on(SetAvailableTrainings, (state, { payload }) => ({
    ...state,
    availableExercises: payload
  })),
  on(SetFinishedTrainings, (state, { payload }) => ({
    ...state,
    finishedExercises: payload
  })),
  on(StartTraining, (state, { payload }) => ({
    ...state,
    activeTraining: {
      ...state.availableExercises.find(ex => ex.id === payload)
    }
  })),
  on(StartTraining, state => ({
    ...state,
    activeTraining: null
  }))
);

export const getTrainingState = createFeatureSelector<TrainingState>(
  'training'
);

export const getAvailableExercises = createSelector(
  getTrainingState,
  state => state.availableExercises
);
export const getFinishedExercises = createSelector(
  getTrainingState,
  state => state.finishedExercises
);
export const getActiveTraining = createSelector(
  getTrainingState,
  state => state.activeTraining
);
export const getIsTraining = createSelector(
  getTrainingState,
  state => state.activeTraining != null
);

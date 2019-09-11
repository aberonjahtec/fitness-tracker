import { createAction, props } from '@ngrx/store';
import { Exercise } from './exercise.model';

const SET_AVAILABLE_TRAININGS = '[Training] Set Available Trainings';
const SET_FINISHED_TRAININGS = '[Training] Set Finished Trainings';
const START_TRAINING = '[Training] Start Training';
const STOP_TRAINING = '[Training] Stop Training';

export const SetAvailableTrainings = createAction(
  SET_AVAILABLE_TRAININGS,
  props<{ payload: Exercise[] }>()
);
export const SetFinishedTrainings = createAction(
  SET_FINISHED_TRAININGS,
  props<{ payload: Exercise[] }>()
);
export const StartTraining = createAction(
  START_TRAINING,
  props<{ payload: string }>()
);
export const StopTraining = createAction(STOP_TRAINING);

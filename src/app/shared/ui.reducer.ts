import { createReducer, on } from '@ngrx/store';
import { StartLoading, StopLoading } from './ui.actions';

export interface State {
  isLoading: boolean;
}

const initialState: State = {
  isLoading: false
};

export const uiReducer = createReducer(
  initialState,
  on(StartLoading, () => ({
    isLoading: true
  })),
  on(StopLoading, () => ({
    isLoading: false
  }))
);

export const getIsLoading = (state: State) => state.isLoading;

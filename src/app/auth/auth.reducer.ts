import { createReducer, on } from '@ngrx/store';
import { SetAuthenticated, SetUnauthenticated } from './auth.actions';

export interface State {
  isAuthenticated: boolean;
}

const initialState: State = {
  isAuthenticated: false
};

export const authReducer = createReducer(
  initialState,
  on(SetAuthenticated, () => ({
    isAuthenticated: true
  })),
  on(SetUnauthenticated, () => ({
    isAuthenticated: false
  }))
);

export const getIsAuth = (state: State) => state.isAuthenticated;

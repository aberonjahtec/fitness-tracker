import { createAction } from '@ngrx/store';

const SET_AUTHENTICATED = '[Auth] Set Authenticated';
const SET_UNAUTHENTICATED = '[Auth] Set Unauthenticated';

export const SetAuthenticated = createAction(SET_AUTHENTICATED);
export const SetUnauthenticated = createAction(SET_UNAUTHENTICATED);

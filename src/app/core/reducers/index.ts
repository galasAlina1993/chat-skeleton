import * as fromLayout from './layout';
import {ActionReducer, ActionReducerMap, combineReducers, createSelector} from '@ngrx/store';

export interface State {
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any): State {
  return productionReducer(state, action);
}

export const getLayoutState = (state: any) => state.core.layout;
export const getLayoutIsLoading = createSelector(getLayoutState, fromLayout.getIsLoading);


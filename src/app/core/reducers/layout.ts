import * as actions from '../actions/layout';

export interface State {
  isLoading: boolean;
}

const initialState: State = {
  isLoading: false
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {

    case actions.actionTypes.SHOW_SPINNER:
      return { ...state, isLoading: true };

    case actions.actionTypes.HIDE_SPINNER:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

export const getIsLoading = (state: State) => state.isLoading;


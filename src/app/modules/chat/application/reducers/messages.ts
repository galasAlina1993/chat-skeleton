import * as actions from '../actions/chat';
import * as models from '../../domain/models';

export interface State {
  loaded: boolean;
  loading: boolean;
  items: models.Message[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  items: []
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.LOAD_CHAT_HISTORY: {
      return {...state, loading: true};
    }

    case actions.LOAD_CHAT_HISTORY_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        items: action.payload.entities
      };
    }

    case actions.SEND_MESSAGE: {
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getItems = (state: State) => state.items;

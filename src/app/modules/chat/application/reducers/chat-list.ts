import * as actions from '../actions/chat';
import * as models from '../../domain/models';

export interface State {
  loaded: boolean;
  loading: boolean;
  items: models.Chat[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  items: []
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.LOAD_CHAT_LIST: {
      return {...state, loading: true};
    }

    case actions.LOAD_CHAT_LIST_SUCCESS: {
      return {
        loaded: true,
        loading: false,
        items: action.payload.entities
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

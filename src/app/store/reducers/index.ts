import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromChat from '../../modules/chat/application/reducers';
import * as fromCore from '../../core/reducers';


export interface State {
  chat: fromChat.State;
  core: fromCore.State;
}

export const reducers: ActionReducerMap<State> = {
  chat: fromChat.reducer,
  core: fromCore.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

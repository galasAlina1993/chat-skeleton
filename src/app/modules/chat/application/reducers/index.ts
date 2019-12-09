import { ActionReducer, ActionReducerMap, combineReducers, createSelector } from '@ngrx/store';

import * as fromChatList from './chat-list';
import * as fromMessages from './messages';


export interface State {
  chatList: fromChatList.State;
  messageList: fromMessages.State;
}

const reducers: ActionReducerMap<State> = {
  chatList: fromChatList.reducer,
  messageList: fromMessages.reducer,
};

const combinedReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any): any {
  return combinedReducer(state, action);
}

export const getChatListState = ({ chat: { chatList }}) => chatList;
export const getChatListLoaded = createSelector(getChatListState, fromChatList.getLoaded);
export const getChatListLoading = createSelector(getChatListState, fromChatList.getLoading);
export const getChatListCollection = createSelector(getChatListState, fromChatList.getItems);

export const getMessageListState = ({ chat: { messageList }}) => messageList;
export const getMessageListLoaded = createSelector(getMessageListState, fromMessages.getLoaded);
export const getMessageListLoading = createSelector(getMessageListState, fromMessages.getLoading);
export const getMessageListCollection = createSelector(getMessageListState, fromMessages.getItems);

import { Action } from '@ngrx/store';
import * as models from '../../domain/models';

export const LOAD_CHAT_LIST = '[CHAT] Load Chat List';
export const LOAD_CHAT_LIST_SUCCESS = '[CHAT] Load Chat List Success';
export const LOAD_CHAT_LIST_FAIL = '[CHAT] Load Chat List Fail';

export const LOAD_CHAT_HISTORY = '[CHAT] Load Chat History';
export const LOAD_CHAT_HISTORY_SUCCESS = '[CHAT] Load Chat History Success';
export const LOAD_CHAT_HISTORY_FAIL = '[CHAT] Load Chat History Fail';

export const SEND_MESSAGE = '[CHAT] Send Message';

export class LoadChatListAction implements Action {
  readonly type = LOAD_CHAT_LIST;
}

export class LoadSuccessChatListPayload {
  entities: models.Chat[];
}

export class LoadSuccessChatListAction implements Action {
  readonly type = LOAD_CHAT_LIST_SUCCESS;
  constructor(public payload: LoadSuccessChatListPayload) {}
}

export class LoadFailChatListAction implements Action {
  readonly type = LOAD_CHAT_LIST_FAIL;
}

export class LoadChatHistoryAction implements Action {
  readonly type = LOAD_CHAT_HISTORY;
}

export class LoadSuccessChatHistoryPayload {
  entities: models.Message[];
}

export class LoadSuccessChatHistoryAction implements Action {
  readonly type = LOAD_CHAT_HISTORY_SUCCESS;
  constructor(public payload: LoadSuccessChatHistoryPayload) {}
}

export class LoadFailChatHistoryAction implements Action {
  readonly type = LOAD_CHAT_HISTORY_FAIL;
}

export class SendMessageAction implements Action {
  readonly type = SEND_MESSAGE;
  constructor(public payload: models.Message) {}
}

export type Actions =
  | LoadChatListAction
  | LoadSuccessChatListAction
  | LoadFailChatListAction
  | LoadChatHistoryAction
  | LoadSuccessChatHistoryAction
  | LoadFailChatHistoryAction
  | SendMessageAction;

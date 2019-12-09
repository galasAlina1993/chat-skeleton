import { Inject, Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import * as actions from '../actions/chat';
import * as chatListServiceContracts from '../../domain/service-contracts/chat';

import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class ChatEffects {
  @Effect()
  loadChatList$: Observable<Action> = this.actions$
    .pipe(
      ofType(actions.LOAD_CHAT_LIST),
      switchMap(() => {
        const request = new chatListServiceContracts.GetChatListRequest();

        return this.chatService.getChatList(request)
          .pipe(
            map(({entities}) => {
              const payload = new actions.LoadSuccessChatListPayload();
              payload.entities = entities;
              return new actions.LoadSuccessChatListAction(payload);
            }),
            catchError(() => of(new actions.LoadFailChatListAction()))
          );
      })
    );

  @Effect()
  loadChatHistory$: Observable<Action> = this.actions$
    .pipe(
      ofType(actions.LOAD_CHAT_HISTORY),
      switchMap(() => {
        const request = new chatListServiceContracts.GetChatHistoryRequest();

        return this.chatService.getChatHistory(request)
          .pipe(
            map(({entities})  => {
              const payload = new actions.LoadSuccessChatHistoryPayload();
              payload.entities = entities;
              return new actions.LoadSuccessChatHistoryAction(payload);
            }),
            catchError(() => of(new actions.LoadFailChatHistoryAction()))
          );
      })
    );

  constructor(
    private store$: Store<any>,
    private actions$: Actions,
    @Inject(chatListServiceContracts.SERVICE_TOKEN)
    private chatService: chatListServiceContracts.IChatService) {
  }
}

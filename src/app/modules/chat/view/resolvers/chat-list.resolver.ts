

import * as actions from '../../application/actions/chat';
import * as reducers from '../../application/reducers';

import { filter, first, map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';

@Injectable()
export class ChatListResolver implements Resolve<boolean> {
  constructor(private store$: Store<any>) {
  }

  resolve(): Observable<any> {
    return combineLatest(
      this.store$.pipe(select(reducers.getChatListLoaded)),
      this.store$.pipe(select(reducers.getChatListLoading))
    )
      .pipe(
        map(([loaded, loading]) => {
          if (!loaded && !loading) {
            this.store$.dispatch(new actions.LoadChatListAction());
            return false;
          }

          return loaded;
        }),
        filter(Boolean),
        first()
      );
  }
}

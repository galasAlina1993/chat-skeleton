import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as reducers from '../../../application/reducers';
import * as models from '../../../domain/models';

@Component({
  templateUrl: './chat-list-container.component.html',
})
export class ChatListContainerComponent {
  loading$: Observable<boolean>;
  chatRooms$: Observable<models.Chat[]>;

  constructor(private store$: Store<any>) {
    this.loading$ = this.store$.pipe(select(reducers.getChatListLoading));
    this.chatRooms$ = this.store$.pipe(select(reducers.getChatListCollection));
  }
}

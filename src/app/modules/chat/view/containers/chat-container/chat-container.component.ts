import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as models from '../../../domain/models';
import * as reducers from '../../../application/reducers';
import { first, map } from 'rxjs/operators';
import * as actions from '../../../application/actions/chat';

@Component({
  templateUrl: './chat-container.component.html',
})
export class ChatContainerComponent {
  messages$: Observable<models.Message[]>;
  profile$: Observable<models.User>;
  opponentProfile$: Observable<models.User>;
  private mockUserId = '54fa90b9-c60b-449a-b327-84bda07de2cb';
  private mockOpponentId = '384b4ea6-2123-459e-8d03-0942aeff11f8';
  constructor(private store$: Store<any>) {
    this.messages$ = this.store$.pipe(select(reducers.getMessageListCollection));
    this.profile$ = this.store$.pipe(
      select(reducers.getMessageListCollection),
      map(([msg]) => msg.from.id === this.mockUserId ? msg.from : msg.to )
    );
    this.opponentProfile$ = this.store$.pipe(
      select(reducers.getMessageListCollection),
      map(([msg]) => msg.from.id === this.mockOpponentId ? msg.from : msg.to )
    );
  }

  async onSendMessage(text: string) {
    const message = await this.makeMessage(text);
    this.store$.dispatch(new actions.SendMessageAction(message));
  }

  async makeMessage(text): Promise<models.Message> {
    const from = await this.profile$.pipe(first()).toPromise();
    const to = await this.opponentProfile$.pipe(first()).toPromise();
    const message = new models.Message();
    message.from = from;
    message.to = to;
    message.type = 0;
    message.text = text;
    return message;
  }
}

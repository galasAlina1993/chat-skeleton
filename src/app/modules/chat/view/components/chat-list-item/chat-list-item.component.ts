import { Component, Input } from '@angular/core';
import * as models from '../../../domain/models';

@Component({
  selector: 'app-chat-list-item',
  templateUrl: './chat-list-item.component.html',
  styleUrls: ['./chat-list-item.component.scss']

})
export class ChatListItemComponent {
  @Input() chatRoom: models.Chat;
}

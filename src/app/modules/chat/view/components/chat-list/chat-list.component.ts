import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as reducers from '../../../application/reducers';
import * as models from '../../../domain/models';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
  @Input() chatRooms: models.Chat[];
}

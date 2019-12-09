import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as models from '../../../domain/models';
@Component({
  selector: 'app-chat-toolbar',
  templateUrl: './chat-toolbar.component.html',
  styleUrls: ['./chat-toolbar.component.scss']
})
export class ChatToolbarComponent {
  @Input() profile: models.User;
  @Output() back = new EventEmitter<void>();
}

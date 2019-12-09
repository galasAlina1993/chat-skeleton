import { Component, Input } from '@angular/core';
import * as models from '../../../domain/models';

@Component({
  templateUrl: './message.component.html',
  selector: 'app-message'
})
export class MessageComponent {
  @Input() msg: models.Message;
  @Input() profile: models.User;

  generateTime(date: Date) {
    const dateObject = new Date(date);
    const minutes = dateObject.getMinutes();
    return `${dateObject.getHours()}: ${minutes < 10 ? 0 : ''}${minutes}`;
  }
}

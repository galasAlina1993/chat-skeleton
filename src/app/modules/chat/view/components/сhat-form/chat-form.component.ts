import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  templateUrl: './chat-form.component.html',
  selector: 'app-chat-form'
})
export class ChatFormComponent {
  text: string;
  @Output() sendMsg = new EventEmitter<string>();

  sendMessage(text): void {
    this.sendMsg.emit(text);
    this.text = '';
  }
}

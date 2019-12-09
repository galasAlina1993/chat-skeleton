import { User } from './user';
import { MessageTypeEnum } from './messageTypeEnum';

export class Message {
  attachmentUrl: string;
  createdDate: Date;
  chatId: string;
  from: User;
  id: string;
  text: string;
  type: MessageTypeEnum;
  to: User;
}

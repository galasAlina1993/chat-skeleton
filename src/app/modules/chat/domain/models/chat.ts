import { User } from './user';
import { Message } from './message';

export class Chat {
  id: string;
  lastMessage: Message;
  members: string[];
  owner: User;
  sender: User;
}

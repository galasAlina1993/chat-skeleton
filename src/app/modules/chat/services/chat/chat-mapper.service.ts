import * as models from '../../domain/models';

export class ChatMapperService {

  static chatDtoToChat({id, lastMessage, members, sender }): models.Chat {
    const chat = new models.Chat();
    chat.id = id;
    chat.lastMessage = this.messageDtoToMessage(lastMessage);
    chat.members = members;
    chat.sender = this.userDtoToUser(sender);
    return chat;
  }

  static messageDtoToMessage({ attachmentUrl, chatId, from, createdDate, id, text, to, type }): models.Message {
    const message = new models.Message();
    message.attachmentUrl = attachmentUrl;
    message.from = this.userDtoToUser(from);
    message.chatId = chatId;
    message.createdDate = new Date(createdDate);
    message.id = id;
    message.text = text;
    message.to = this.userDtoToUser(to);
    message.type = type;
    return message;
  }

  static userDtoToUser({ avatarUrl, birthDate, email, firstName, id, lastName }): models.User {
    const user = new models.User();
    user.avatarUrl = avatarUrl;
    user.birthDate = birthDate;
    user.email = email;
    user.firstName = firstName;
    user.id = id;
    user.lastName = lastName;
    return user;
  }
}

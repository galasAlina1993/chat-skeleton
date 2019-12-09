import { Injectable } from '@angular/core';
import * as contracts from '../../domain/service-contracts/chat';
import * as mappers from './chat-mapper.service';
import { Observable, of } from 'rxjs';
import { messagesResponse } from './chat-history.response';
import { chatListResponse } from './chat-list.response';
import { delay } from 'rxjs/operators';

@Injectable()
export class ChatMockService implements contracts.IChatService {

  getChatList(request: contracts.GetChatListRequest): Observable<contracts.GetChatListResponse> {
    const response = new contracts.GetChatListResponse();
    response.entities = chatListResponse.map((item: any) => mappers.ChatMapperService.chatDtoToChat(item));
    return of(response).pipe(delay(2000));
  }

  getChatHistory(request: contracts.GetChatHistoryRequest): Observable<contracts.GetChatHistoryResponse> {
    const response = new contracts.GetChatHistoryResponse();
    response.entities = messagesResponse.map((item: any) => mappers.ChatMapperService.messageDtoToMessage(item));
    return of(response).pipe(delay(3000));
  }
}

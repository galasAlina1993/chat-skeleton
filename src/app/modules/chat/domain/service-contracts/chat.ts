import { Observable } from 'rxjs';
import * as models from '../models';
import { InjectionToken } from '@angular/core';

export interface IChatService {
  getChatList(request: GetChatListRequest): Observable<GetChatListResponse>;
  getChatHistory(request: GetChatHistoryRequest): Observable<GetChatHistoryResponse>;
}

export const SERVICE_TOKEN = new InjectionToken('Chat.IChatService');

export class GetChatHistoryRequest {
  id: string;
}

export class GetChatHistoryResponse {
  entities: models.Message[];
}

export class GetChatListRequest {
  id: string;
}

export class GetChatListResponse {
  entities: models.Chat[];
}

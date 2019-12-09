import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import * as containers from './view/containers';
import * as components from './view/components';
import * as services from './services';
import * as chatServiceContracts from './domain/service-contracts/chat';
import * as moduleEffects from './application/effects/chat';
import * as moduleResolvers from './view/resolvers';
import { ChatRoutingModule } from './chat-routing.module';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatDividerModule,
  MatCardModule,
  MatListModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

import { SafePipe } from '../../core/pipes/safe.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    EffectsModule.forRoot([moduleEffects.ChatEffects]),
    ChatRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatTooltipModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    containers.ChatContainerComponent,
    containers.ChatListContainerComponent,
    containers.ChatListContainerComponent,
    components.ChatListComponent,
    components.ChatListItemComponent,
    components.ChatToolbarComponent,
    components.MessageComponent,
    components.ChatFormComponent,
    SafePipe
  ],
  providers: [
    {
      provide: chatServiceContracts.SERVICE_TOKEN,
      useClass: services.ChatMockService
    },
    moduleResolvers.ChatListResolver,
    moduleResolvers.ChatHistoryResolver
  ]
})
export class ChatModule {}

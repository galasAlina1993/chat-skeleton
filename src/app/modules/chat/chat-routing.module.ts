import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as containers from './view/containers';
import * as moduleResolvers from './view/resolvers';

const routes: Routes = [
  {
    path: '',
    component: containers.ChatListContainerComponent,
    resolve: { chatList: moduleResolvers.ChatListResolver }
  },
  {
    path: ':id',
    component: containers.ChatContainerComponent,
    resolve: { chatHistory: moduleResolvers.ChatHistoryResolver }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ChatRoutingModule {}

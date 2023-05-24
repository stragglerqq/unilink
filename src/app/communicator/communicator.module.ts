import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommunicatorComponent} from './communicator.component';
import {ContactsComponent} from './+components/contacts/contacts.component';
import {ConversationBoardComponent} from './+components/conversation-board/conversation-board.component';
import {CommunicatorRoutingModule} from "./communicator-routing.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CommunicatorComponent,
    ContactsComponent,
    ConversationBoardComponent
  ],
  imports: [
    CommunicatorRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class CommunicatorModule {
}

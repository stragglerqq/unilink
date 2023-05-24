import {Component, Input, OnInit} from '@angular/core';
import {ConversationDto} from "../../../core/conversation/interface/Conversation";
import {UserService} from "../../../core/user/services/user.service";

const USER_ID = 1;

@Component({
  selector: 'app-conversation-board',
  templateUrl: './conversation-board.component.html',
  styleUrls: ['./conversation-board.component.scss']
})
export class ConversationBoardComponent implements OnInit {
  @Input() conversation: ConversationDto;
  userId: number;

  constructor(
    private readonly userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.userId = this.userService.getLoggedUserId();
  }
}

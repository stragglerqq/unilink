import {Injectable} from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ConversationDto, Message} from "../interface/Conversation";
import {ContactDto} from "../../contact/interface/Contact";
import {UserService} from "../../user/services/user.service";

@Injectable({
  providedIn: 'root',
})
export class ConversationService {

  constructor(
    private readonly http: HttpClient,
    private readonly userService: UserService,
  ) {
  }

  getById(id: ContactDto['id']): Observable<ConversationDto> {
    const loadedFromCache = this.loadFromLS(id);

    if (loadedFromCache) {
      return of(loadedFromCache);
    }

    return this.http.get<ConversationDto>(`./assets/conversation-${id}.json`).pipe(
      catchError(() => {
        return of({messages: []});
      }),
      tap((value) => this.saveToLS(value, id)),
    );
  }

  submitMessage(message: Partial<Message>, contact: ContactDto): Observable<void> {
    // It simulates BE takes values from request like userId, or sets timestamp of message but there should be only POST request with new message added to conversation
    const conversation = this.loadFromLS(contact.id);
    const fullMessage = {
      value: message.value,
      timestamp: (new Date()).toString(),
      authorId: this.userService.getLoggedUserId(),
    }
    conversation.messages.push(fullMessage);

    // Simulated response from other person as mock. Task requirement.
    const replayMessage = {
      value: 'I am not avail right now! Sorry!',
      timestamp: (new Date()).toString(),
      authorId: contact.id,
    }

    conversation.messages.push(replayMessage);
    this.saveToLS(conversation, contact.id);

    return of(null);
  }

  private saveToLS(conversation: ConversationDto, contactId: ContactDto['id']): void {
    const jsonString = JSON.stringify(conversation);
    localStorage.setItem(`conversation-${contactId}`, jsonString);
  }

  private loadFromLS(contactId: ContactDto['id']): ConversationDto {
    const jsonString = localStorage.getItem(`conversation-${contactId}`);
    return JSON.parse(jsonString);
  }
}


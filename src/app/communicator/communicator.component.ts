import {Component, OnInit} from '@angular/core';
import {ContactService} from "../core/contact/services/contact.service";
import {BehaviorSubject, Observable, switchMap, take, tap} from "rxjs";
import {ContactDto} from "../core/contact/interface/Contact";
import {ConversationDto} from "../core/conversation/interface/Conversation";
import {ConversationService} from "../core/conversation/services/conversation.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-communicator',
  templateUrl: './communicator.component.html',
  styleUrls: ['./communicator.component.scss']
})
export class CommunicatorComponent implements OnInit {
  contact$: Observable<ContactDto[]>;
  conversation$: Observable<ConversationDto>;
  conversationBS: BehaviorSubject<ConversationDto>;
  form: FormGroup;
  activeContact: ContactDto;

  constructor(
    private readonly contactService: ContactService,
    private readonly conversationService: ConversationService,
    private readonly fb: FormBuilder,
  ) {
  }

  get message(): AbstractControl {
    return this.form.get('message');
  }

  ngOnInit(): void {
    this.contact$ = this.contactService.getAll();
    this.conversationBS = new BehaviorSubject(null);
    this.conversation$ = this.conversationBS.asObservable();
    this.form = this.fb.group({
      message: new FormControl({value: '', disabled: !this.activeContact})
    });
  }

  onKeydown(): void {
    this.conversationService.submitMessage({value: this.message.value}, this.activeContact).pipe(
      take(1),
      tap(() => this.form.reset()),
      switchMap(() => this.fetchConversationById(this.activeContact)),
    ).subscribe();
  }

  onContactSelection(contact: ContactDto): void {
    this.activeContact = contact;
    this.message.enable();
    this.fetchConversationById(contact).pipe(take(1)).subscribe();
  }

  private fetchConversationById(contact: ContactDto): Observable<ConversationDto> {
    return this.conversationService.getById(contact.id).pipe(
      tap((conversation: ConversationDto) => {
        this.conversationBS.next(conversation);
      }),
    )
  }
}

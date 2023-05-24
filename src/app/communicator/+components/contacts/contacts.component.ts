import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ContactDto} from "../../../core/contact/interface/Contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  @Input() contacts: ContactDto[];
  @Output() onContactSelection = new EventEmitter<ContactDto>;
  activeContact: ContactDto;

  contactClick(contact: ContactDto): void {
    this.activeContact = contact;
    this.onContactSelection.emit(contact);
  }
}

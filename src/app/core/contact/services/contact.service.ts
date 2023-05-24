import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ContactDto} from "../interface/Contact";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  getAll(): Observable<ContactDto[]> {
    return this.http.get<ContactDto[]>('./assets/contacts.json');
  }
}


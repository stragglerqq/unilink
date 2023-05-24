import {Injectable} from '@angular/core';

const USER_ID = 1;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getLoggedUserId(): number {
    return USER_ID;
  }
}


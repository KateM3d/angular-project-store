import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  error$ = new Subject<string>();

  //handle error messages
  handle(message: string) {
    this.error$.next(message);
  }

  //clears errror message
  clear() {
    this.error$.next('');
  }
}

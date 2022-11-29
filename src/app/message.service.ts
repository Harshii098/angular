import { Injectable } from '@angular/core';
import { Observable,observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<string>()

  constructor() { }

  SendMessage(message:string){
    this.subject.next(message)
  }
  receivedMessage():Observable<string>{
    return this.subject.asObservable();
  }

  SendMessage1(message1:string){
    this.subject.next(message1)

}
receivedMessage1():Observable<string>{
  return this.subject.asObservable();
}
}

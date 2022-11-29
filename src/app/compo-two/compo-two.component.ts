import { Component, OnInit,OnDestroy} from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-compo-two',
  templateUrl: './compo-two.component.html',
  styleUrls: ['./compo-two.component.css']
})
export class CompoTwoComponent implements OnInit,OnDestroy {
  message: string;
  $subs: Subscription = new Subscription;

  constructor(private messageService:MessageService) {}
  
  ngOnInit():void{
    this.$subs=this.messageService.receivedMessage().subscribe((d) => {
      this.message=d;
    });
     
  }
  ngOnDestroy(): void {
    this.$subs.unsubscribe();
  }
  SendMessage1(message1: string){
    this.messageService.SendMessage1(message1);
  }


}




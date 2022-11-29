import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-compo-one',
  templateUrl: './compo-one.component.html',
  styleUrls: ['./compo-one.component.css']
})
export class CompoOneComponent implements OnInit {

  constructor(private messageService:MessageService) {}
  message1:string;
  
  sendMessage(message: string){
    this.messageService.SendMessage(message);
  }

  ngOnInit():void{
    this.messageService.receivedMessage1().subscribe((a)=>{
      this.message1 = a;
    })

  }

}

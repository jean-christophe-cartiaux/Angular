import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import{MessageService} from "./message.service";

@Component({
  selector: 'app-demo-service',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './demo-service.component.html',
  styleUrl: './demo-service.component.scss'
})
export class DemoServiceComponent implements OnInit{

    title:string='Demo de service an Angular';

    message!:string;
    newMessage!:string;

    constructor(private _messageService:MessageService) { }
    ngOnInit() {
        this.message=this._messageService.getMessage();
    }
    setNewMessage(){
        this._messageService.setMessage(this.newMessage);
        this.message=this._messageService.getMessage();
    }
}

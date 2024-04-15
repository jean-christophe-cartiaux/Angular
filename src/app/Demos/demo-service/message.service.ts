import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 message: string ='Ma fucking tête va exploser , vite le gras du BK'
  constructor() { }

    getMessage():string{
    return this.message;
    }

    setMessage(messageToSet:string):void{
        this.message = messageToSet;
    }
}

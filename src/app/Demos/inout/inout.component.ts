import { Component } from '@angular/core';
import {ChildComponent} from "./child/child.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-inout',
  standalone: true,
  imports: [ChildComponent,FormsModule],
  templateUrl: './inout.component.html',
  styleUrl: './inout.component.scss'
})
export class InoutComponent {
  title : string ='Demo de input - output en Angular'

  num1:number=0;
  num2:number=0;
  result:number=0;

  calculateResult(event:number){
    this.result=event;
  }
}

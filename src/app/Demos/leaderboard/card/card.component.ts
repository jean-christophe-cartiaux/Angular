import {Component, Output,Input,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

    @Output() banCharacter:EventEmitter<number> = new EventEmitter<number>();
    @Input() id:number=0;
    @Input() name:string="";
    @Input() ranked:number=0;
    @Input() win:number=0;
    @Input() defeat:number=0;

    ban(idCharacter:number){
        this.banCharacter.emit(idCharacter);
    }
}

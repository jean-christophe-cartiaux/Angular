import { Component,Input ,Output,OnChanges,SimpleChanges,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {


    @Output() banCharacter:EventEmitter<number> = new EventEmitter<number>();
    @Input() id:number=0;
    @Input() nom:string="";
    @Input() combien:number=0;
    ban(idCharacter:number){
        this.banCharacter.emit(idCharacter);
    }
}

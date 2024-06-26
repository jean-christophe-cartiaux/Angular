import { Component,Input ,Output,OnChanges,SimpleChanges,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges {



  @Input()info!:string;
  @Input() num1!:number;
  @Input() num2!:number;

  @Output() calculToutCa: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if ('num1' in changes||'num2' in changes){
      this.calculate()
    }
  }

  calculate(){
    const result: number = this.num1+this.num2;
    this.calculToutCa.emit(result);
  }
}

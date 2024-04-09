import { Component } from '@angular/core';
import { CdTimerModule } from 'angular-cd-timer';
@Component({
  selector: 'app-exo-timer',
  standalone: true,
  imports: [],
  templateUrl: './exo-timer.component.html',
  styleUrl: './exo-timer.component.scss'
})
export class ExoTimerComponent {
  title:string='Chrono'
  heure:number=0;
  min:number=0;
  sec:number=0;
  time: string = `${'0'+this.heure}:${'0'+this.min}: ${'0'+this.sec}`
  setTimer:any;
  start(){

    this.setTimer=setInterval(()=>{
    if (this.sec>=60){
      this.min = (this.min+1);
      this.sec = 0;
      if(this.min>=60){
        this.heure=(this.heure+1);
        this.min =0;
      }
    }
      this.time = `${this.heure < 10 ? '0'+this.heure : this.heure}:${this.min  < 10 ? '0'+this.min : this.min}: ${this.sec  < 10 ? '0'+this.sec : this.sec}`


      this.sec = (this.sec+1);
    },1);

  }
  stop(){
    clearInterval(this.setTimer)
}
reset(){
  this.heure=0;
  this.min=0;
  this.sec=0;
  this.time = `${'0'+this.heure}:${'0'+this.min}: ${'0'+this.sec}`
  clearInterval(this.setTimer)

}

}

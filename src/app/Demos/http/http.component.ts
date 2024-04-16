import { Component ,OnDestroy,OnInit} from '@angular/core';
import{DataService} from './data.service';
import{Subscription} from "rxjs";

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [],
  templateUrl: './http.component.html',
  styleUrl: './http.component.scss'
})
export class HttpComponent implements OnInit, OnDestroy {
  todos!:any;
  todos2!:any[];
  dataObs!:Subscription;
  dataObs2!:Subscription;


constructor(private _dataService:DataService) { }

  ngOnInit():void {
  this.dataObs=this._dataService.getData().subscribe(data =>{
    this.todos=data
    console.log(data)
  })
    this.dataObs2=this._dataService.getAllDatas().subscribe(data=>{
      this.todos2=data;
      console.log(data)
    })
  }
  ngOnDestroy():void {
  this.dataObs.unsubscribe()
    this.dataObs2.unsubscribe()
}
}

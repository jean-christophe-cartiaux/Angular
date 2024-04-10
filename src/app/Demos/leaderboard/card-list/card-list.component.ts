import { Component } from '@angular/core';
import{CardComponent} from "../card/card.component";

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {


  listTopElevenCharacters:ILeaderboard[]=[
    {id: 1,name: 'Shadowheart',ranked:1 ,win: 100, defeat:0},
    {id: 2,name:'Squall' ,ranked:2 ,win: 98, defeat:2},
    {id: 3,name: 'Princess Lea',ranked: 3,win: 90, defeat:10},
    {id: 4,name: 'Spiderman',ranked:4 ,win:85 , defeat:15},
    {id: 5,name: 'Marty McFly',ranked:5 ,win:72 , defeat:28},
    {id: 6,name: 'Flash McQueen',ranked:6 ,win:70 , defeat:30},
    {id: 7,name:'Capitain Kirk' ,ranked: 7,win: 66, defeat:34},
    {id: 8,name: 'Legolas',ranked: 8,win:50 , defeat:50},
    {id: 9,name:'Luffy' ,ranked: 9,win: 45, defeat:55},
    {id: 10,name:'Deadpool' ,ranked:10 ,win:30 , defeat:70},
    {id: 11,name: 'Zoé',ranked: 11,win:25 , defeat:75},
  ]
  banCharacter(idCharacter:number){
    this.listTopElevenCharacters=this.listTopElevenCharacters.filter(character => character.id !== idCharacter)
  }
}

interface ILeaderboard{
  id:number;
  name:string;
  ranked:number;
  win:number;
  defeat:number;
}

import { Component } from '@angular/core';
import {UpperCasePipe,
        LowerCasePipe,
        TitleCasePipe,
        DatePipe,
        CurrencyPipe} from "@angular/common";
import {CustomPipe} from "./custom.pipe";

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe,
            LowerCasePipe,
            TitleCasePipe,
            DatePipe,
            CurrencyPipe,
            CustomPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  title:string=`Les pipes en angular`;
  stringEnMajuscule : string = 'Happy sushis';
  stringEnMinuscule:string=`J'ESPERE QUE C'EST BON * NON JE SUIS PAS JALUOX`;
  firstEnMajuscule:string =`tim meurt d'envie d'un sushi`
  dateDuJour:Date=new Date();
  argentPlease:number=42;
}

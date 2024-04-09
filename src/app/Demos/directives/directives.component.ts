import { Component } from '@angular/core';
import {NgIf,NgFor} from "@angular/common";
import{CustomDirective} from "./custom.directive";

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf,NgFor,CustomDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
title:string = 'Démos des directives en Angular';
showIfTrueNgIf:boolean = false;
showIfTrueIf: boolean=false;

arrayOfThingsToShow:string[]=['Hello','WebApps','From (séries)','Angular is fun','But react is funnier'];

showAndHideInvisibleThings(){
  this.showIfTrueNgIf= !this.showIfTrueNgIf;
}
  showAndHideInvisibleThings2(){
    this.showIfTrueIf= !this.showIfTrueIf;
  }
}

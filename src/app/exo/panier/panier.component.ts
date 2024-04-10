import { Component } from '@angular/core';
import {ChildComponent} from "../../Demos/inout/child/child.component";
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [
    ChildComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss'
})
export class PanierComponent {
title:string='Mon super Panier '
num1:number=0;
nom:string="";
arrayArticles: Array< String|Number|Date > = []
}

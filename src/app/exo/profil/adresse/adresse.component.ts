import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-adresse',
  standalone: true,
  imports: [],
  templateUrl: './adresse.component.html',
  styleUrl: './adresse.component.scss'
})

export class AdresseComponent{
  group:FormGroup;
 
  constructor(private _formBuilder:FormBuilder) {
    this.group = this._formBuilder.group({


    })
  }
}

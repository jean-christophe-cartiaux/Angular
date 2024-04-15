import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulaires',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './formulaires.component.html',
  styleUrl: './formulaires.component.scss'
})
export class FormulairesComponent {

    title:string="Demo des types de formulaires en Angular";
    control:FormControl;
    group : FormGroup;
    array:FormGroup;

    constructor(private _formBuilder:FormBuilder) {
      this.control= this._formBuilder.control(null,[Validators.required]);
      this.group=this._formBuilder.group({
        prenom:[null,Validators.required],
        age:[null,Validators.required],

      })
      this.array=this._formBuilder.group({
        array:this._formBuilder.array([this._formBuilder.control(null,[Validators.required])])
      })
    }
    onControlSubmit(e:Event){
      e.preventDefault();

      console.log(this.control.value);
    }
  onGroupSubmit(e:Event){
    e.preventDefault();

    console.log(this.group.value);
  }
  getArrayForm():FormArray{
      return this.array.get('array') as FormArray;
  }
  addControl(){
      this.getArrayForm().push(this._formBuilder.control(null,[Validators.required]));
  }
  onArraySubmit(e:Event){
      e.preventDefault();
    console.log(this.array)
  }
}

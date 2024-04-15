import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AdresseComponent} from "./adresse/adresse.component";

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  title:string='Profil';
  group:FormGroup;

  constructor(private _formBuilder:FormBuilder) {

    this.group=this._formBuilder.group({
      nom:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      prenom:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      email:[null,[Validators.email,Validators.required]],
      pseudo:[null,[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
      titreFonction:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      description:[null,[Validators.required,Validators.minLength(10),Validators.maxLength(250)]],

        /*
        Adresse (dans un sous groupe)
        Rue : taille minimum de 3, max de 30, requis;
        Numéro : taille maximum de 3, requis;
        Ville : taille minimum de 3, max de 30, requis;
        CP : taille minimum de 4, max de 4, requis;
        */
    })

  }
  onGroupSubmit(e:Event){
    e.preventDefault();

    console.log(this.group.value);
  }
}

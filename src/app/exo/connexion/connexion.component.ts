import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {connexionService} from "./connexion.service";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent {
  title:string='Connexion';
  username:string='';
  password:string='';

constructor(private _connexionService:connexionService,private _router:Router) { }

  login(){
    if(this._connexionService.login(this.username,this.password)){
      console.log('Tu es connecté')
      this._router.navigate(['/exos/profil']);
    }else{
      console.log('Tu n\'es pas connecté');
    }
  }
}



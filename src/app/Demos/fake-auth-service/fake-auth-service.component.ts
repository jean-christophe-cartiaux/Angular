import { Component } from '@angular/core';
import {AuthService} from "./auth.service";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-fake-auth-service',
  standalone: true,
    imports: [InputTextModule, FormsModule],
  templateUrl: './fake-auth-service.component.html',
  styleUrl: './fake-auth-service.component.scss'
})
export class FakeAuthServiceComponent {
    title:string='Secondes démo de service en Angular';

username:string='';
password:string='';

constructor(private _authService:AuthService){}


    login(){
    if(this._authService.login(this.username,this.password)){
        console.log('Tu es connecté')
    }else{
        console.log('Tu n\'es pas connecté');
    }
    }
}

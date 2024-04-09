import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-bindings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.scss'
})
export class BindingsComponent {
  title:string='Hello je suis dans le composant Bindings';
  bindingOneWay:string='Je suis appelé et affiché par la vue du composant';
  bindingOneWayAvecComposanteHTML:string=`Je ne <span class='bold'>PEUX PAS</span> être modifié depuis la vue .`;
  bindingTwoWays:string=`Je suis appelé et affiché par la vue du composant et je peux être modifié depuis la vue`;
  adaptativeClass:boolean=true;
  diasableAttribute:boolean=false;

  eventBinding(){
    console.log('Événement déclancher!')
  }
  classBinding(){
    this.adaptativeClass=!this.adaptativeClass;
  }
  attributeBinding(){
    this.diasableAttribute=true;
  }
}

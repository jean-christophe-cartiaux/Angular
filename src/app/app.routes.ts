import { Routes } from '@angular/router';
import {BindingsComponent} from "./Demos/bindings/bindings.component";
import {PipesComponent} from "./Demos/pipes/pipes.component";
import {ExoTimerComponent} from "./exo/exo-timer/exo-timer.component";
import {DirectivesComponent} from "./Demos/directives/directives.component";
import {InoutComponent} from "./Demos/inout/inout.component";

export const routes: Routes = [
/*  {path:'demos/bindings',component:BindingsComponent},
  {path:'demos/pipes',component:PipesComponent},*/

  {path:'demos',children:[
      {path:'bindings',component:BindingsComponent},
      {path:'pipes',component:PipesComponent},
      {path:'times',component:ExoTimerComponent},
      {path:'directive',component:DirectivesComponent},
      {path:'inout',component:InoutComponent},
    ]},
  {path:'exos',children:[
      {path: 'timer', component: ExoTimerComponent}
    ]}
];

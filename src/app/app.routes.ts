import { Routes } from '@angular/router';
import {BindingsComponent} from "./Demos/bindings/bindings.component";
import {PipesComponent} from "./Demos/pipes/pipes.component";
import {ExoTimerComponent} from "./exo/exo-timer/exo-timer.component";

export const routes: Routes = [
/*  {path:'demos/bindings',component:BindingsComponent},
  {path:'demos/pipes',component:PipesComponent},*/

  {path:'demos',children:[
      {path:'bindings',component:BindingsComponent},
      {path:'pipes',component:PipesComponent},
      {path:'times',component:ExoTimerComponent}
    ]}
];

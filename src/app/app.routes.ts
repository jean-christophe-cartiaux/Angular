import { Routes } from '@angular/router';
import {BindingsComponent} from "./Demos/bindings/bindings.component";
import {PipesComponent} from "./Demos/pipes/pipes.component";
import {ExoTimerComponent} from "./exo/exo-timer/exo-timer.component";
import {DirectivesComponent} from "./Demos/directives/directives.component";
import {InoutComponent} from "./Demos/inout/inout.component";
import {PanierComponent} from "./exo/panier/panier.component";
import {CardComponent} from "./Demos/leaderboard/card/card.component";
import {CardListComponent} from "./Demos/leaderboard/card-list/card-list.component";

export const routes: Routes = [
/*  {path:'demos/bindings',component:BindingsComponent},
  {path:'demos/pipes',component:PipesComponent},*/

  {path:'demos',children:[
      {path:'bindings',component:BindingsComponent},
      {path:'pipes',component:PipesComponent},
      {path:'times',component:ExoTimerComponent},
      {path:'directives',component:DirectivesComponent},
      {path:'inout',component:InoutComponent},
          {path:'character',component:CardListComponent}
    ]},
  {path:'exos',children:[
      {path: 'timer', component: ExoTimerComponent},
      {path:'panier',component:PanierComponent}

    ]}
];

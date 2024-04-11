import { Routes } from '@angular/router';
import {BindingsComponent} from "./Demos/bindings/bindings.component";
import {PipesComponent} from "./Demos/pipes/pipes.component";
import {ExoTimerComponent} from "./exo/exo-timer/exo-timer.component";
import {DirectivesComponent} from "./Demos/directives/directives.component";
import {InoutComponent} from "./Demos/inout/inout.component";

import {CardListComponent} from "./Demos/leaderboard/card-list/card-list.component";
import {ListeArticleComponent} from "./exo/panierv1/button-liste/liste-article/liste-article.component";
import {DemoServiceComponent} from "./Demos/demo-service/demo-service.component";
import {FakeAuthServiceComponent} from "./Demos/fake-auth-service/fake-auth-service.component";

export const routes: Routes = [
/*  {path:'demos/bindings',component:BindingsComponent},
  {path:'demos/pipes',component:PipesComponent},*/

  {path:'demos',children:[
      {path:'bindings',component:BindingsComponent},
      {path:'pipes',component:PipesComponent},
      {path:'times',component:ExoTimerComponent},
      {path:'directives',component:DirectivesComponent},
      {path:'inout',component:InoutComponent},
      {path:'character',component:CardListComponent},
      {path:'demo-service-one',component: DemoServiceComponent},
      {path:'demo-service-two',component: FakeAuthServiceComponent},



    ]},
  {path:'exos',children:[
      {path: 'timer', component: ExoTimerComponent},

      {path:'panierv1',component:ListeArticleComponent}

    ]}
];

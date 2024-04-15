import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { NgIf} from "@angular/common";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import{SubmenuDirective} from "../Directives/submenu.directive";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink, NgIf,NgbDropdownModule,SubmenuDirective
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    links:Link[]=[
      {
        title:'Demos',
        url: '/demos',
        isVisible:true,
            children:[
              {
                title:'Directives',
                url: '/demos/directives',
                isVisible:false,
              },
              {title:'Inout',
                url: '/demos/inout',
                isVisible:false,
              },
              {
                title:'Pipes',
                url: '/demos/pipes',
                isVisible:false,
              },
              {
                title:'Bindings',
                url: '/demos/bindings',
                isVisible:false,
              },
                {
                    title:'Character',
                    url: '/demos/character',
                    isVisible:false,
                },
                {
                    title:'ServiceOne',
                    url: '/demos/demo-service-one',
                    isVisible:false,
                },
                {
                    title:'ServiceTwo',
                    url: '/demos/demo-service-two',
                    isVisible:false,
                }
            ]
      },
      {
        title:'Exos',
        url: '/exos',
        isVisible:true,
        children:[
          {
            title:'Chrono',
            url: '/exos/timer',
            isVisible:false,
          },
          {
              title:'Panier V1',
              url: '/exos/panierv1',
              isVisible:false,
          },
          {
            title:'Task',
            url: '/exos/tasks',
            isVisible:false,
          }
        ]
      }
    ]
}

class Link{
  title!: string;
  url?:string;
  children?:Link[];
  isVisible!:boolean;
}





import {Component, EventEmitter, Input, Output} from '@angular/core';
import{ButtonModule} from "primeng/button";
import {IArticle} from "../liste-article/liste-article.component";

@Component({
  selector: 'app-button-liste',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './button-liste.component.html',
  styleUrl: './button-liste.component.scss'
})
export class ButtonListeComponent {


    @Input() article!:IArticle
    @Output() ajout:EventEmitter<IArticle>= new EventEmitter<IArticle>();
    @Output() supprime:EventEmitter<string>= new EventEmitter<string>()

    ajoutArticle(){
        this.ajout.emit(this.article);
    }

    supprimeArticle(){
        this.supprime.emit(this.article.id);
    }
}

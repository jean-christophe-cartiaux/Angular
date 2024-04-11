import { Component } from '@angular/core';
import {v4 as uuidv4} from'uuid'
import{FormsModule} from '@angular/forms';
import{CurrencyPipe,DatePipe} from "@angular/common";
import{ButtonListeComponent} from "../button-liste/button-liste.component";
import{CardModule} from "primeng/card";
import{ButtonModule} from "primeng/button";
import{InputTextModule} from "primeng/inputtext";
import{InputNumberModule} from "primeng/inputnumber";
import{FieldsetModule} from "primeng/fieldset";

@Component({
  selector: 'app-liste-article',
  standalone: true,
  imports: [FormsModule,
            CurrencyPipe,
            DatePipe,
            ButtonListeComponent ,
            CardModule,
            ButtonModule,
            InputTextModule,
            InputNumberModule,
            FieldsetModule],
  templateUrl: './liste-article.component.html',
  styleUrl: './liste-article.component.scss'
})
export class ListeArticleComponent {

    listeArticle:IArticle[]=[];

    article : IArticle={
        id:uuidv4(),
        prix:0,
        nom:'',
        quantite:0,
        date:new Date()
    };
    totalPanier:number=0;

    onSubmit(){
        this.ajoutArticle(this.article)
    }
    total(){
        this.totalPanier=this.listeArticle.reduce((acc,article)=>acc + article.prix * article.quantite,0)
    }
    ajoutArticle(article:IArticle){
        const existingArticle = this.listeArticle.find(item=>item.nom==article.nom)
        if(existingArticle){
            if(existingArticle.quantite ===5){
                return;
            }else{
                existingArticle.quantite=(existingArticle.quantite||1)+1;
            }
        }else{
            this.listeArticle.push({...article,quantite:article.quantite});
        }
        this.total();

        this.resetForm();
    }
    resetForm(){
        this.article={
            id:uuidv4(),
            prix:0,
            nom:'',
            quantite:0,
            date:new Date()
        }
    }
    suppressionArticle(articleId:string){
        const article =this.listeArticle.find(item=>item.id==articleId);
        if(article && article.quantite && article.quantite >1){
            article.quantite--;
        }else{
            this.listeArticle = this.listeArticle.filter(item=>item.id==articleId);
        }
        this.total();

    }
}

export interface IArticle{
    id:string;
    prix:number;
    nom:string;
    quantite:number;
    date:Date;
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import postos from "./postos.json"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
postos:[];

nome:string;
bairro:string;
nota:number;

  constructor(public navCtrl: NavController) {
      this.postos = postos.postos;
      console.log(postos)
  }

  env(){
      var novo = new postos{
        nome:string,
        bairro:string,
        nota:number,
      }
    postos.push(novo);

  }

}

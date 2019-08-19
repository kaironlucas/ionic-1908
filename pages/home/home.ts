import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import postos from "./postos.json"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
postos:[];

  constructor(public navCtrl: NavController) {
      this.postos = postos.postos;
      console.log(postos)
  }

}

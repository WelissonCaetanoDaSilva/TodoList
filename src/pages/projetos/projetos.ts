import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProjetosService} from '../../providers/projetos-service';
import {Projeto} from '../projeto/projeto';

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class Projetos {

projetos: any[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public projetosService: ProjetosService) {
              this.projetos = projetosService.getProjetos();
  }
selecionaProjeto(C){
let CN = parseInt(C);
this.navCtrl.push(Projeto,{codigo:CN, novo: false});
}
 novoProjeto() {
this.navCtrl.push(Projeto,{codigo:0, novo: true});
 }
}

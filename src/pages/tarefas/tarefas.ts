import { Component,Pipe, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {Tarefa} from '../tarefa/tarefa';
import {TarefasService} from '../../providers/tarefas-service';
import {ProjetosService} from '../../providers/projetos-service';

@IonicPage()
@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
})
export class Tarefas {

tarefas: any[];
projetos: any[];
filtroTarefas = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuController: MenuController,
              public tarefasService: TarefasService,
              public projetosService: ProjetosService) {

                this.projetos = projetosService.getProjetos();
                this.tarefas = tarefasService.getTarefas();
  }

 nomeProjeto(c):string{
   for(let i=0 ;i<this.projetos.length;i++)
     if(this.projetos[i].codigo == c)
     return this.projetos[i].nome;
     return "Projeto não encontrado";
 }
    selecionaTarefa(c) {
let t: number = parseInt(c);
this.navCtrl.push(Tarefa,{codigo: t, novo: false});
    }
    novaTarefa() {
      this.navCtrl.push(Tarefa,{codigo: 0, novo: true});
    }
    limpaFiltros(){
      this.filtroTarefas = {};
      this.menuController.close();
    }
    filtroProjeto(c){
      this.filtroTarefas = {projeto: c}
      this.menuController.close();
    }
    filtroDias(d){
      this.filtroTarefas = {dias: d};
      this.menuController.close();
    }
}
@Pipe({
   name: 'filtro'
 })
 export class Filtro implements PipeTransform{
   transform(itens:any[], filtro:any): any{
     itens.sort((a,b) => a.data-b.data);
     if(filtro.projeto >=0){
       return itens.filter(item =>item.projeto == filtro.projeto);
     }
     else if (filtro.dias>=0){
       let d = (new Date()).getTime()+filtro.dias*24*60*60*1000;
       return itens.filter(
         item =>item.data<=d
       );
     }
     else
     return itens;
   }
 }
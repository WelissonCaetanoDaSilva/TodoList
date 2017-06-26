import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TarefasService {

  tarefas = [
    {codigo:1, projeto: 1, descricao: 'Organizar grande dia',
  data: new Date(2017,11,9),prioridade: 1},
  {codigo: 2, projeto: 1, descricao: 'Dia da Noiva',
data: new Date(2017,11,9),prioridade: 2},
{codigo: 3, projeto: 2, descricao:'Fazer decoração',
data: new Date(2017,11,7),prioridade: 3},
{codigo: 4, projeto: 3, descricao:'Organograma do matrimonio',
data: new Date(2017,11,8),prioridade: 2},
{codigo: 5,projeto:3,descricao:'fazer decoração',
data: new Date(2017,2,28), prioridade: 1}
  ];
  ultimoCodigo = 5;

  constructor(public http: Http) {
    console.log('Hello TarefasService Provider');
  }
getTarefas(): any[]{
  return this.tarefas;
}

editTarefa(c,prj,desc,dat,prior){
for(let i=0; i<this.tarefas.length; i++){
  if(this.tarefas[i].codigo == c){
    this.tarefas[i].projeto = prj;
    this.tarefas[i].descricao = desc;
    this.tarefas[i].data = dat;
    this.tarefas[i].prioridade = prior;
    break;
  }  
}
}
addTarefa(prj,desc,dat,prior){
this.ultimoCodigo++;
this.tarefas.push({
  codigo: this.ultimoCodigo,
  projeto: prj,
  descricao: desc,
  data: dat,
  prioridade: prior
});
  
}
deleteTarefa(c){
for(let i=0; i<this.tarefas.length; i++){
  if(this.tarefas[i].codigo == c){
    this.tarefas.splice(i,1);
    break;
  }
}
}
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjetosService {

projetos = [
  {codigo: 1, nome: 'Casamento'},
  {codigo: 2, nome: 'Festa'},
  {codigo: 3, nome: 'Cerimonial'}
];
ultimoCodigo : 3;
  constructor(public http: Http) {
    console.log('Hello ProjetosService Provider');
  }
 getProjetos(){
   return this.projetos;
 }
editProjeto(C:number,N:string){
  for(let i=0; i<this.projetos.length;i++){
    if(this.projetos[i].codigo == C){
      this.projetos[i].nome = N;
      break;
    }
  }
}
deleteProjeto(C:number){
  for(let i=0; i<this.projetos.length;i++){
    if(this.projetos[i].codigo == C){
      this.projetos.splice(i,1);
      break;
    }
  }
}
addProjeto(n:string){
  this.ultimoCodigo++;
  this.projetos.push({codigo: this.ultimoCodigo,nome: n});

}
}

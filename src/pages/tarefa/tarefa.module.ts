import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tarefa } from './tarefa';

@NgModule({
  declarations: [
    Tarefa,
  ],
  imports: [
    IonicPageModule.forChild(Tarefa),
  ],
  exports: [
    Tarefa
  ]
})
export class TarefaModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tarefas } from './tarefas';

@NgModule({
  declarations: [
    Tarefas,
  ],
  imports: [
    IonicPageModule.forChild(Tarefas),
  ],
  exports: [
    Tarefas
  ]
})
export class TarefasModule {}

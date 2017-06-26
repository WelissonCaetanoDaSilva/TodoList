import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Projetos } from './projetos';

@NgModule({
  declarations: [
    Projetos,
  ],
  imports: [
    IonicPageModule.forChild(Projetos),
  ],
  exports: [
    Projetos
  ]
})
export class ProjetosModule {}

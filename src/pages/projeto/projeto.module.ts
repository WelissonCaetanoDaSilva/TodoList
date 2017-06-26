import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Projeto } from './projeto';

@NgModule({
  declarations: [
    Projeto,
  ],
  imports: [
    IonicPageModule.forChild(Projeto),
  ],
  exports: [
    Projeto
  ]
})
export class ProjetoModule {}

import { Component } from '@angular/core';

import { Projetos } from '../projetos/projetos';
import { Tarefas } from '../tarefas/tarefas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = Projetos;
  tab1Root = Tarefas;
  //tab3Root = ContactPage;

  constructor() {

  }
}

import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Projetos } from '../pages/projetos/projetos';  
import { Projeto } from '../pages/projeto/projeto'; 
import { Tarefas,Filtro} from '../pages/tarefas/tarefas';
import { Tarefa} from '../pages/tarefa/tarefa';
import { TabsPage } from '../pages/tabs/tabs';
 
import { ProjetosService} from '../providers/projetos-service';
import { TarefasService} from '../providers/tarefas-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Projetos,
    Projeto,
    Tarefas,
    Tarefa,
    TabsPage,
    Filtro
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Projetos,
    Projeto,
    Tarefas,
    Tarefa,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProjetosService,
    TarefasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

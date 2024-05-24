import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'chat1',
    loadChildren: () => import('./chat1/chat1.module').then( m => m.Chat1PageModule)
  },
  {
    path: 'chat2',
    loadChildren: () => import('./chat2/chat2.module').then( m => m.Chat2PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}

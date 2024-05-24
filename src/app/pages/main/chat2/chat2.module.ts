import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chat2PageRoutingModule } from './chat2-routing.module';

import { Chat2Page } from './chat2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chat2PageRoutingModule,
    SharedModule
  ],
  declarations: [Chat2Page]
})
export class Chat2PageModule {}

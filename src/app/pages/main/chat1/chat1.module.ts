import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chat1PageRoutingModule } from './chat1-routing.module';

import { Chat1Page } from './chat1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chat1PageRoutingModule,
    SharedModule
  ],
  declarations: [Chat1Page]
})
export class Chat1PageModule {}

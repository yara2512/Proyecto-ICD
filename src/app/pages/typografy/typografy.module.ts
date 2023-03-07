import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypografyPageRoutingModule } from './typografy-routing.module';

import { TypografyPage } from './typografy.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule,
    TypografyPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TypografyPage]
})
export class TypografyPageModule {}

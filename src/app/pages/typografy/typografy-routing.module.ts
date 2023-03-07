import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypografyPage } from './typografy.page';

const routes: Routes = [
  {
    path: '',
    component: TypografyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypografyPageRoutingModule {}

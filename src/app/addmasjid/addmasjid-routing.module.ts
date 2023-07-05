import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmasjidPage } from './addmasjid.page';

const routes: Routes = [
  {
    path: '',
    component: AddmasjidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmasjidPageRoutingModule {}

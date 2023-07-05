import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmasjidPageRoutingModule } from './addmasjid-routing.module';

import { AddmasjidPage } from './addmasjid.page';
import { SupabaseService } from '../supabase.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddmasjidPageRoutingModule,
  ],
  declarations: [AddmasjidPage],
  providers: [SupabaseService],
})
export class AddmasjidPageModule {}

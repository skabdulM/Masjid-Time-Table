import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SupabaseService } from '../supabase.service';
import { TimePipe } from '../time.pipe';
import { AppModule } from '../app.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, TimePipe],
  providers: [SupabaseService, TimePipe],
})
export class HomePageModule {}

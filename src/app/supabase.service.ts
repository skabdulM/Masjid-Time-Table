import { AddMasjid } from './addmasjid';
import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabaseClient: SupabaseClient;
  constructor() {
    this.supabaseClient = createClient(
      environment.supabase.url,
      environment.supabase.key
    );
  }

  async getTimetable() {
    let { data: data, error } = await this.supabaseClient
      .from('Masjid')
      .select('*');
    if (data) {
      return data;
    } else {
      return error;
    }
  }

  async addMasjid(temp: AddMasjid) {
    const { data: data, error } = await this.supabaseClient
      .from('Masjid')
      .insert([temp]);
  }
}

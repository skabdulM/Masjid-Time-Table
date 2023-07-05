import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SupabaseService } from '../supabase.service';
import { AddMasjid } from '../addmasjid';
@Component({
  selector: 'app-addmasjid',
  templateUrl: './addmasjid.page.html',
  styleUrls: ['./addmasjid.page.scss'],
})
export class AddmasjidPage implements OnInit {
  constructor(private supabaseService: SupabaseService) {}
  addmasjidForm: FormGroup = new FormGroup({
    masjid_name: new FormControl(''),
    area: new FormControl(''),
    fajr: new FormControl(),
    zuhar: new FormControl(),
    asr: new FormControl(),
    magrib: new FormControl(),
    isha: new FormControl(),
    juma_1: new FormControl(),
    juma_2: new FormControl(),
    juma_3: new FormControl(),
  });

  ngOnInit() {}

  addMasjid() {
    const temp = this.addmasjidForm.value;
    const time_table: AddMasjid = {
      masjid_name: temp.masjid_name,
      area: temp.area,
      fajr: new Date(temp.fajr).toLocaleTimeString(),
      zuhar: new Date(temp.zuhar).toLocaleTimeString(),
      asr: new Date(temp.asr).toLocaleTimeString(),
      magrib: new Date(temp.magrib).toLocaleTimeString(),
      isha: new Date(temp.isha).toLocaleTimeString(),
      juma_1: new Date(temp.juma_1).toLocaleTimeString(),
      juma_2: temp.juma_2 ? new Date(temp.juma_2).toLocaleTimeString() : null,
      juma_3: temp.juma_3 ? new Date(temp.juma_3).toLocaleTimeString() : null,
    };
    this.supabaseService
      .addMasjid(time_table)
      .then(() => {
        this.addmasjidForm.reset();
      })
      .catch((error) => {
        alert(error), console.log(error);
      });
  }
}

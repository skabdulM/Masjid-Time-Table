import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private supabaseService: SupabaseService) {}
  times: any = [];
  async ngOnInit() {
    this.supabaseService.getTimetable().then((data: any) => {
      this.times = data;
      this.temp(data);
    });
  }
  temp(data: any) {
    // const table: any = document.getElementById('myTable');
    // for (let i = 1; i < data.length; i++) {
    //   const element = data[i];
    //   var row = table.insertRow();
    //   var cell1 = row.insertCell(0);
    //   var cell2 = row.insertCell(1);
    //   var cell3 = row.insertCell(2);
    //   var cell4 = row.insertCell(3);
    //   var cell5 = row.insertCell(4);
    //   var cell6 = row.insertCell(5);
    //   var cell7 = row.insertCell(6);
    //   var cell8 = row.insertCell(7);
    //   var cell9 = row.insertCell(8);
    //   var cell10 = row.insertCell(9);
    //   var cell11 = row.insertCell(10);
    //   // cell1.innerHTML = element.sr_no;
    //   cell1.innerHTML = `<th scope="row">${element.sr_no}</th> `;
    //   cell2.innerHTML = element.masjid_name;
    //   cell3.innerHTML = element.area;
    //   cell4.innerHTML = element.fajr;
    //   cell5.innerHTML = element.zuhar;
    //   cell6.innerHTML = element.asr;
    //   cell7.innerHTML = element.magrib;
    //   cell8.innerHTML = element.isha;
    //   cell9.innerHTML = element.Juma_1;
    //   cell10.innerHTML = element.Juma_2.length != 0 ? element.Juma_2 : 'NA';
    //   cell11.innerHTML = element.Juma_3.length != 0 ? element.Juma_3 : 'NA';
    // }
    // console.log(data);
  }
}

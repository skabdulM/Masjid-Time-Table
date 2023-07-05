export interface AddMasjid {
  masjid_name: string;
  area: string;
  fajr: string;
  zuhar: string;
  asr: string;
  magrib: string;
  isha: string;
  juma_1: string;
  juma_2: string | null;
  juma_3: string | null;
}

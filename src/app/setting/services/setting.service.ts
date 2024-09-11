import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { settingCategory } from 'src/app/shared/models/setting.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http:HttpClient) { }
  getSettingData(){
     return this.http.get<settingCategory>(`${environment.BASE_URL}/settings`)
  }
}

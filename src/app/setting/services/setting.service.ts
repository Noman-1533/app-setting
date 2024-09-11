import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { settingCategory, singleSettingObject } from 'src/app/shared/models/setting.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http:HttpClient) { }
  getSettingData(endPoint:string){
     return this.http.get<singleSettingObject>(`${environment.BASE_URL}/${endPoint}`)
  }
  getSettingsKeys(settingData:settingCategory){
    return Object.keys(settingData);
  }

  getSettings(settingData:settingCategory,settingName:string){
    return Object.keys(settingData[settingName]).filter(key=>key!=='label'&&key!=='subLabel');
  }
}

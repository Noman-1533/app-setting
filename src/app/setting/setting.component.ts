import { Component, OnInit } from '@angular/core';
import { SettingService } from './services/setting.service';
import { settingCategory } from '../shared/models/setting.model';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  settingData:settingCategory={};
  constructor(private settingService:SettingService) { }

  ngOnInit(): void {
    this.settingService.getSettingData().subscribe((data)=>{
      this.settingData=data;
      this.getSettings('general')
    });
  }

  getSettingsKeys(){
    return Object.keys(this.settingData);
  }

  getSettings(settingName:string){
    console.log(Object.keys(this.settingData[settingName]));
  }

}

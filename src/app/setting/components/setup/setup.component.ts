import { Component, OnDestroy, OnInit } from '@angular/core';
import { settingCategory, singleSettingObject } from 'src/app/shared/models/setting.model';
import { SettingService } from '../../services/setting.service';
import { forkJoin, Subscription } from 'rxjs';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit ,OnDestroy{
   settingKeys:string[]=[
    
  ];
  settingSubscription:Subscription=new Subscription();
  settingData:settingCategory={};
  settingDataObjects:singleSettingObject[]=[];
  constructor(public settingService:SettingService) { }

  ngOnInit(): void {
    this.fetchAllSettingsData();
   
  }
  fetchAllSettingsData() {
    // const requests = this.settingKeys.map(key =>
    //   this.settingService.getSettingData(key)
    // );

    // this.settingSubscription = forkJoin(requests).subscribe((responses) => {
    //   responses.forEach((res, index) => {
    //     this.settingData[this.settingKeys[index]] = res;
    //     // console.log(res);
    //     this.settingDataObjects.push(res);
    //   });
    //   // console.log(this.settingDataObjects)
    // });
    this.settingSubscription=this.settingService.getSettingData('data').subscribe((res)=>{
      this.settingData=res;
      this.settingKeys=this.settingService.getSettingsKeys(this.settingData);
    })
  }

  ngOnDestroy(): void {
      this.settingSubscription.unsubscribe()
  }
}

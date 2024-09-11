import { Component, OnDestroy, OnInit } from '@angular/core';
import { settingCategory } from 'src/app/shared/models/setting.model';
import { SettingService } from '../../services/setting.service';
import { forkJoin, Subscription } from 'rxjs';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit ,OnDestroy{
   settingKeys:string[]=[
    "general",
    "other",
    "lowUsage",
    "reports"
  ];
  settingSubscription:Subscription=new Subscription();
  settingData:settingCategory={};
  constructor(public settingService:SettingService) { }

  ngOnInit(): void {
    this.fetchAllSettingsData()
  }
  fetchAllSettingsData() {
    const requests = this.settingKeys.map(key =>
      this.settingService.getSettingData(key)
    );

    this.settingSubscription = forkJoin(requests).subscribe((responses) => {
      responses.forEach((res, index) => {
        this.settingData[this.settingKeys[index]] = res;
      });
    });
  }

  ngOnDestroy(): void {
      this.settingSubscription.unsubscribe()
  }
}

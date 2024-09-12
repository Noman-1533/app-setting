import { Component, Input, OnInit } from '@angular/core';
import { settingCategory, singleSettingObject, singleSettingOption } from '../../models/setting.model';
import { SettingService } from 'src/app/setting/services/setting.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Input()singleSettingObject:singleSettingObject={label:'',subLabel:''};
  @Input()settingName:string[]=[];
  @Input()singleSettings:singleSettingObject[]=[];
  settingOptionObject:singleSettingOption={
    label:'',
    subLabel:'',
    default:'',
    option:[]
  };
  constructor(private settingService:SettingService) { }

  ngOnInit(): void {
  }
  createObjectTypeOption(item:singleSettingOption|string){
    if(typeof item !=='string'){
      this.settingOptionObject= item;
    }
     
  }
  isEmpty(obj:singleSettingObject){
    return Object.keys(obj).length === 0
  }

  onSaveSettings(){
   
    let i=0;
    for(let setting of this.singleSettings){
    let response =this.settingService.setSettingData(this.settingName[i],setting);
    response.subscribe((res)=>{console.log(res)})
    i++;
  }
  }
  getSettings(singleSettingObject:singleSettingObject){
    return this.settingService.getSettings(singleSettingObject)
  }
}

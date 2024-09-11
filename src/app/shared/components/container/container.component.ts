import { Component, Input, OnInit } from '@angular/core';
import { settingCategory, singleSettingObject, singleSettingOption } from '../../models/setting.model';
import { SettingService } from 'src/app/setting/services/setting.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Input('label')settingLabel:string='';
  @Input('subLabel')settingSubLabel:string='';
  @Input('settingsObject')settings:settingCategory={}
  @Input()settingName:string='';
  settingOptionObject:singleSettingOption={
    label:'',
    subLabel:'',
    default:'',
    option:[]
  };
  constructor(public settingService:SettingService) { }

  ngOnInit(): void {
   
  }
  createObjectTypeOption(item:singleSettingOption|string){
    if(typeof item !=='string'){
      this.settingOptionObject= item;
    }
     
  }
  isEmpty(obj:settingCategory){
    return Object.keys(obj).length === 0
  }

  onSaveSettings(){
    console.log(this.settings)
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-option',
  templateUrl: './setting-option.component.html',
  styleUrls: ['./setting-option.component.scss']
})
export class SettingOptionComponent implements OnInit {
  @Input('label')settingLabel:string='';
  @Input('subLabel')settingSubLabel:string='';
  @Input('options')settingOptions:string[]=[];
  @Input('defaultOption')settingDefaultOption:string='';
  constructor() { }

  ngOnInit(): void {
  }
  onOptionChanged(){
    
  }
}

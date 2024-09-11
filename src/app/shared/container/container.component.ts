import { Component, Input, OnInit } from '@angular/core';
import { settingCategory } from '../models/setting.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Input('label')settingLabel:string='';
  @Input('subLabel')settingSubLabel:string='';
  @Input('settingsObject')settings:settingCategory={}
  constructor() { }

  ngOnInit(): void {
  }

}

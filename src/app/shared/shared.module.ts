import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ContainerComponent } from './components/container/container.component';
import { SettingOptionComponent } from './components/setting-option/setting-option.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ContainerComponent,
    SettingOptionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    ContainerComponent,
  ],
})
export class SharedModule { }

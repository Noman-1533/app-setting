import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ContainerComponent } from './components/container/container.component';
import { SettingOptionComponent } from './components/setting-option/setting-option.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ContainerComponent,
    SettingOptionComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    ContainerComponent,
    SettingOptionComponent,
    HeaderComponent,
  ],
})
export class SharedModule { }

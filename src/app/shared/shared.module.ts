import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ContainerComponent } from './container/container.component';
import { FormFieldComponent } from './form-field/form-field.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ContainerComponent,
    FormFieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    ContainerComponent,
    FormFieldComponent
  ],
})
export class SharedModule { }

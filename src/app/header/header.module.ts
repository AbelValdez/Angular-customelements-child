
import { NgModule} from '@angular/core';


import {createCustomElement} from '@angular/elements'
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { DescriptionComponent } from '../description/description.component';
@NgModule({
  declarations: [
    HeaderComponent,
    DescriptionComponent
  ],
  exports:[HeaderComponent],
  imports: [
    CommonModule
  ],  
  providers: [], 
  bootstrap: []
})
export class HeaderModule { }

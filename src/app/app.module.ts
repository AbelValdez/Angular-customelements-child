import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DescriptionComponent } from './description/description.component';
import {createCustomElement} from '@angular/elements'
@NgModule({
  declarations: [
    AppComponent,      
    HeaderComponent,
    DescriptionComponent  
  ],
  imports: [
    BrowserModule,    
  ],  
  providers: [],
  entryComponents:[
    HeaderComponent,
    DescriptionComponent
  ],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
    
  }

  ngDoBootstrap() {
    this.registerCustomElements();
  }

  registerCustomElements() {
    const DescriptionElement = createCustomElement(DescriptionComponent, {injector: this.injector});
    customElements.define('app-description', DescriptionElement);

    const HeaderElement = createCustomElement(HeaderComponent, {injector: this.injector});
    customElements.define('app-header', HeaderElement);       
  }

 }

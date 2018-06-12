import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class HeaderComponent implements OnInit{
  
  @Input() title: String;
  @Input() subtitle: String;
  @Input() description: String;

  constructor() {}

  ngOnInit() {
    
  }

  

}

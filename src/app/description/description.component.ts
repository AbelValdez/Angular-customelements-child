import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DescriptionComponent implements OnInit {
  @Input() text: string;
  
  constructor() { }

  ngOnInit() {
  }

}

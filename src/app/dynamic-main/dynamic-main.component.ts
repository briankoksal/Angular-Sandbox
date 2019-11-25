import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-main',
  templateUrl: './dynamic-main.component.html',
  styleUrls: ['./dynamic-main.component.less']
})
export class DynamicMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  AddChild(){
    console.log('adding child');
  }
}

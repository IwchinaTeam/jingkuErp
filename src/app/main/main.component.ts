import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  
  constructor() { }

  ngOnInit() {
  }

}

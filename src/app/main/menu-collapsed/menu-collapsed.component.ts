import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's-menu-collapsed',
  templateUrl: './menu-collapsed.component.html',
  styleUrls: ['./menu-collapsed.component.scss']
})
export class MenuCollapsedComponent implements OnInit {
  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}

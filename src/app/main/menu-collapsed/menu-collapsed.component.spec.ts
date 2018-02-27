import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCollapsedComponent } from './menu-collapsed.component';

describe('MenuCollapsedComponent', () => {
  let component: MenuCollapsedComponent;
  let fixture: ComponentFixture<MenuCollapsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCollapsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCollapsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

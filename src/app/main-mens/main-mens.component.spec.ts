import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMensComponent } from './main-mens.component';

describe('MainMensComponent', () => {
  let component: MainMensComponent;
  let fixture: ComponentFixture<MainMensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

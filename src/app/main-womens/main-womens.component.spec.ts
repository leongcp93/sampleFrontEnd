import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWomensComponent } from './main-womens.component';

describe('MainWomensComponent', () => {
  let component: MainWomensComponent;
  let fixture: ComponentFixture<MainWomensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWomensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWomensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

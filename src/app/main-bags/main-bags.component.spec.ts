import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBagsComponent } from './main-bags.component';

describe('MainBagsComponent', () => {
  let component: MainBagsComponent;
  let fixture: ComponentFixture<MainBagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

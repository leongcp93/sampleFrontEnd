import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOutdoorComponent } from './main-outdoor.component';

describe('MainOutdoorComponent', () => {
  let component: MainOutdoorComponent;
  let fixture: ComponentFixture<MainOutdoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainOutdoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOutdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

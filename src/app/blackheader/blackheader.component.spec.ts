import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackheaderComponent } from './blackheader.component';

describe('BlackheaderComponent', () => {
  let component: BlackheaderComponent;
  let fixture: ComponentFixture<BlackheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

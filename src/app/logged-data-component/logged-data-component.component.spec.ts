import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedDataComponentComponent } from './logged-data-component.component';

describe('LoggedDataComponentComponent', () => {
  let component: LoggedDataComponentComponent;
  let fixture: ComponentFixture<LoggedDataComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedDataComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

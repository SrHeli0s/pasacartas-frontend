import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitScreenComponent } from './wait-screen.component';

describe('WaitScreenComponent', () => {
  let component: WaitScreenComponent;
  let fixture: ComponentFixture<WaitScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaitScreenComponent]
    });
    fixture = TestBed.createComponent(WaitScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

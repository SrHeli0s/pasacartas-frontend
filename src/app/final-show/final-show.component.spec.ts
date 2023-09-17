import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalShowComponent } from './final-show.component';

describe('FinalShowComponent', () => {
  let component: FinalShowComponent;
  let fixture: ComponentFixture<FinalShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalShowComponent]
    });
    fixture = TestBed.createComponent(FinalShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

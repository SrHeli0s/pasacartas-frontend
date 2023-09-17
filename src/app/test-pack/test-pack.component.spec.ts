import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPackComponent } from './test-pack.component';

describe('TestPackComponent', () => {
  let component: TestPackComponent;
  let fixture: ComponentFixture<TestPackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestPackComponent]
    });
    fixture = TestBed.createComponent(TestPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

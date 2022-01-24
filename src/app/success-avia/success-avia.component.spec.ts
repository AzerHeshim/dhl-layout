import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAviaComponent } from './success-avia.component';

describe('SuccessAviaComponent', () => {
  let component: SuccessAviaComponent;
  let fixture: ComponentFixture<SuccessAviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAviaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

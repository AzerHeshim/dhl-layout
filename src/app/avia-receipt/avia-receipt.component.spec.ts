import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviaReceiptComponent } from './avia-receipt.component';

describe('AviaReceiptComponent', () => {
  let component: AviaReceiptComponent;
  let fixture: ComponentFixture<AviaReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviaReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AviaReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

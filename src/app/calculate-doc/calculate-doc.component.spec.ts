import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateDocComponent } from './calculate-doc.component';

describe('CalculateDocComponent', () => {
  let component: CalculateDocComponent;
  let fixture: ComponentFixture<CalculateDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

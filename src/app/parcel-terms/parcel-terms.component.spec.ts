import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelTermsComponent } from './parcel-terms.component';

describe('ParcelTermsComponent', () => {
  let component: ParcelTermsComponent;
  let fixture: ComponentFixture<ParcelTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCountryComponent } from './third-country.component';

describe('ThirdCountryComponent', () => {
  let component: ThirdCountryComponent;
  let fixture: ComponentFixture<ThirdCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FursetlerComponent } from './fursetler.component';

describe('FursetlerComponent', () => {
  let component: FursetlerComponent;
  let fixture: ComponentFixture<FursetlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FursetlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FursetlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

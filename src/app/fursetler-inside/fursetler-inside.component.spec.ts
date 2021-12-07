import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FursetlerInsideComponent } from './fursetler-inside.component';

describe('FursetlerInsideComponent', () => {
  let component: FursetlerInsideComponent;
  let fixture: ComponentFixture<FursetlerInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FursetlerInsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FursetlerInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

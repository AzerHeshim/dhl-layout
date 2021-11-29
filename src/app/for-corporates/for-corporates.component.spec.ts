import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCorporatesComponent } from './for-corporates.component';

describe('ForCorporatesComponent', () => {
  let component: ForCorporatesComponent;
  let fixture: ComponentFixture<ForCorporatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForCorporatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForCorporatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

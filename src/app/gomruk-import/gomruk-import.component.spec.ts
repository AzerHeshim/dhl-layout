import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GomrukImportComponent } from './gomruk-import.component';

describe('GomrukImportComponent', () => {
  let component: GomrukImportComponent;
  let fixture: ComponentFixture<GomrukImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GomrukImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GomrukImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

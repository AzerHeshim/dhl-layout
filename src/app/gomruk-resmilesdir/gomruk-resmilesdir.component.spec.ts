import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GomrukResmilesdirComponent } from './gomruk-resmilesdir.component';

describe('GomrukResmilesdirComponent', () => {
  let component: GomrukResmilesdirComponent;
  let fixture: ComponentFixture<GomrukResmilesdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GomrukResmilesdirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GomrukResmilesdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

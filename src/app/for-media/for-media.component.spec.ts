import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForMediaComponent } from './for-media.component';

describe('ForMediaComponent', () => {
  let component: ForMediaComponent;
  let fixture: ComponentFixture<ForMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

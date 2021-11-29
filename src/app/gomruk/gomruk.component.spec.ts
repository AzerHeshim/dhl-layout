import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GomrukComponent } from './gomruk.component';

describe('GomrukComponent', () => {
  let component: GomrukComponent;
  let fixture: ComponentFixture<GomrukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GomrukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GomrukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

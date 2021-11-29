import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GomrukIxracComponent } from './gomruk-ixrac.component';

describe('GomrukIxracComponent', () => {
  let component: GomrukIxracComponent;
  let fixture: ComponentFixture<GomrukIxracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GomrukIxracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GomrukIxracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

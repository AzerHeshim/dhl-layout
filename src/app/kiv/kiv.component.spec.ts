import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KivComponent } from './kiv.component';

describe('KivComponent', () => {
  let component: KivComponent;
  let fixture: ComponentFixture<KivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

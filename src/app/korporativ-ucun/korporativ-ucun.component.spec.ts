import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorporativUcunComponent } from './korporativ-ucun.component';

describe('KorporativUcunComponent', () => {
  let component: KorporativUcunComponent;
  let fixture: ComponentFixture<KorporativUcunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorporativUcunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorporativUcunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

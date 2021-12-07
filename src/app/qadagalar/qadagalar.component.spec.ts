import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QadagalarComponent } from './qadagalar.component';

describe('QadagalarComponent', () => {
  let component: QadagalarComponent;
  let fixture: ComponentFixture<QadagalarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QadagalarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QadagalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowPriceComponent } from './low-price.component';

describe('LowPriceComponent', () => {
  let component: LowPriceComponent;
  let fixture: ComponentFixture<LowPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LowPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

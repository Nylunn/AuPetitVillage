import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighPriceComponent } from './high-price.component';

describe('HighPriceComponent', () => {
  let component: HighPriceComponent;
  let fixture: ComponentFixture<HighPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

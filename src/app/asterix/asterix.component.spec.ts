import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsterixComponent } from './asterix.component';

describe('AsterixComponent', () => {
  let component: AsterixComponent;
  let fixture: ComponentFixture<AsterixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsterixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsterixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

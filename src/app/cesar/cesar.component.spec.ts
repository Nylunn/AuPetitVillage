import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesarComponent } from './cesar.component';

describe('CesarComponent', () => {
  let component: CesarComponent;
  let fixture: ComponentFixture<CesarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CesarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

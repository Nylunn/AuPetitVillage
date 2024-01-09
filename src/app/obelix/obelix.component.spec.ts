import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObelixComponent } from './obelix.component';

describe('ObelixComponent', () => {
  let component: ObelixComponent;
  let fixture: ComponentFixture<ObelixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObelixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObelixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

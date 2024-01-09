import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdefixComponent } from './idefix.component';

describe('IdefixComponent', () => {
  let component: IdefixComponent;
  let fixture: ComponentFixture<IdefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdefixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

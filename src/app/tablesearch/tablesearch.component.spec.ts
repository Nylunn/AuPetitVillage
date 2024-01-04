import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesearchComponent } from './tablesearch.component';

describe('TablesearchComponent', () => {
  let component: TablesearchComponent;
  let fixture: ComponentFixture<TablesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablesearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

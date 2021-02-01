import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropViewComponent } from './drag-drop-view.component';

describe('DragDropViewComponent', () => {
  let component: DragDropViewComponent;
  let fixture: ComponentFixture<DragDropViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

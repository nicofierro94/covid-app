import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiedTableComponent } from './notified-table.component';

describe('NotifiedTableComponent', () => {
  let component: NotifiedTableComponent;
  let fixture: ComponentFixture<NotifiedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifiedTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifiedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

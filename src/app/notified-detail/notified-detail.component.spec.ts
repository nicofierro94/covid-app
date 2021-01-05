import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiedDetailComponent } from './notified-detail.component';

describe('NotifiedDetailComponent', () => {
  let component: NotifiedDetailComponent;
  let fixture: ComponentFixture<NotifiedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifiedDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifiedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

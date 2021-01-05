import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiedFormComponent } from './notified-form.component';

describe('NotifiedFormComponent', () => {
  let component: NotifiedFormComponent;
  let fixture: ComponentFixture<NotifiedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifiedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifiedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

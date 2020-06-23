import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessgaeComponent } from './messgae.component';

describe('MessgaeComponent', () => {
  let component: MessgaeComponent;
  let fixture: ComponentFixture<MessgaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessgaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessgaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

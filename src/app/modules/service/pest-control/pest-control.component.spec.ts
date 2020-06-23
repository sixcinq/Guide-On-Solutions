import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestControlComponent } from './pest-control.component';

describe('PestControlComponent', () => {
  let component: PestControlComponent;
  let fixture: ComponentFixture<PestControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

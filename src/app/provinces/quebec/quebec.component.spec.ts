import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuebecComponent } from './quebec.component';

describe('QuebecComponent', () => {
  let component: QuebecComponent;
  let fixture: ComponentFixture<QuebecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuebecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuebecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

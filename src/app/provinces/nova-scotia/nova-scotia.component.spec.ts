import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaScotiaComponent } from './nova-scotia.component';

describe('NovaScotiaComponent', () => {
  let component: NovaScotiaComponent;
  let fixture: ComponentFixture<NovaScotiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaScotiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaScotiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

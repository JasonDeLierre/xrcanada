import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateqcComponent } from './donateqc.component';

describe('DonateqcComponent', () => {
  let component: DonateqcComponent;
  let fixture: ComponentFixture<DonateqcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateqcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateqcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbertaComponent } from './alberta.component';

describe('AlbertaComponent', () => {
  let component: AlbertaComponent;
  let fixture: ComponentFixture<AlbertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterDeckComponent } from './center-deck.component';

describe('CenterDeckComponent', () => {
  let component: CenterDeckComponent;
  let fixture: ComponentFixture<CenterDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

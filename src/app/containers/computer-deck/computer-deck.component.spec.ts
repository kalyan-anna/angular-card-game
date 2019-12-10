import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerDeckComponent } from './computer-deck.component';

describe('ComputerDeckComponent', () => {
  let component: ComputerDeckComponent;
  let fixture: ComponentFixture<ComputerDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

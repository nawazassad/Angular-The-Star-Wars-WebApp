import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStarShipsComponent } from './display-star-ships.component';

describe('DisplayStarShipsComponent', () => {
  let component: DisplayStarShipsComponent;
  let fixture: ComponentFixture<DisplayStarShipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayStarShipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStarShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

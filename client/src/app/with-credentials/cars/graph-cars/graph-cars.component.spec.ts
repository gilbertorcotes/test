import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCarsComponent } from './graph-cars.component';

describe('GraphCarsComponent', () => {
  let component: GraphCarsComponent;
  let fixture: ComponentFixture<GraphCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

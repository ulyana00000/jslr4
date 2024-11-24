import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDimensionalArrayComponent } from './two-dimensional-array.component';

describe('TwoDimensionalArrayComponent', () => {
  let component: TwoDimensionalArrayComponent;
  let fixture: ComponentFixture<TwoDimensionalArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoDimensionalArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoDimensionalArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

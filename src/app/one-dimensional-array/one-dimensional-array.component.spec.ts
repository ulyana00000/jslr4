import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDimensionalArrayComponent } from './one-dimensional-array.component';

describe('OneDimensionalArrayComponent', () => {
  let component: OneDimensionalArrayComponent;
  let fixture: ComponentFixture<OneDimensionalArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneDimensionalArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneDimensionalArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

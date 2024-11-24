import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCalculatorComponent } from './field-calculator.component';

describe('FieldCalculatorComponent', () => {
  let component: FieldCalculatorComponent;
  let fixture: ComponentFixture<FieldCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

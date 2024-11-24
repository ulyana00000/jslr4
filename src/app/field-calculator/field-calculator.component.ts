import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Базовий клас: Поле
class Field {
  constructor(public name: string, public r: number) {}

  // Метод: Кількість врожаю з одиниці площі
  getYieldPerUnit(k: number): number {
    return k * this.r;
  }
}

// Нащадок: Картопляне поле
class PotatoField extends Field {
  constructor(name: string, r: number, public s: number) {
    super(name, r); // Викликаємо конструктор базового класу
  }

  // Метод: Кількість врожаю з усього поля
  getTotalYield(k: number): number {
    const yieldPerUnit = this.getYieldPerUnit(k); // Використовуємо метод базового класу
    return yieldPerUnit * this.s;
  }
}

@Component({
  selector: 'app-field-calculator',
  imports: [CommonModule,FormsModule],
  templateUrl: './field-calculator.component.html',
  styleUrls: ['./field-calculator.component.css'],
})
export class FieldCalculatorComponent {
  selectedForm: string = 'base';
  fieldName: string = '';
  seedWeight: any = '';
  yieldCoefficient: any = '';
  fieldArea: any = '';

  result: string = '';
  errorMessage: string = '';

  // Метод для перевірки числового значення
  validateInput(value: any, fieldName: string): number {
    const numberValue = Number(value);
    if (isNaN(numberValue) || numberValue <= 0) {
      throw new Error(`Поле "${fieldName}" повинно містити додатне число.`);
    }
    return numberValue;
  }

  // Обчислення для базового класу
  calculateBaseClass() {
    try {
      const r = this.validateInput(this.seedWeight, 'Вага насіння на одиницю площі (r)');
      const k = this.validateInput(this.yieldCoefficient, 'Коефіцієнт врожайності (k)');

      const field = new Field(this.fieldName, r);
      const yieldPerUnit = field.getYieldPerUnit(k);

      this.result = `Назва поля: ${this.fieldName}, Урожай з одиниці площі: ${yieldPerUnit.toFixed(2)} тонн`;
      this.errorMessage = ''; // Очищуємо повідомлення про помилки
    } catch (error: any) {
      this.errorMessage = error.message;
      this.result = ''; // Очищуємо результат
    }
  }

  // Обчислення для класу-нащадка
  calculateChildClass() {
    try {
      const r = this.validateInput(this.seedWeight, 'Вага насіння на одиницю площі (r)');
      const s = this.validateInput(this.fieldArea, 'Площа поля (S)');
      const k = this.validateInput(this.yieldCoefficient, 'Коефіцієнт врожайності (k)');

      const potatoField = new PotatoField(this.fieldName, r, s);
      const yieldPerUnit = potatoField.getYieldPerUnit(k);
      const totalYield = potatoField.getTotalYield(k);

      this.result = `Назва поля: ${this.fieldName}, Урожай з одиниці площі: ${yieldPerUnit.toFixed(
        2
      )} тонн, Урожай з усього поля: ${totalYield.toFixed(2)} тонн`;
      this.errorMessage = ''; // Очищуємо повідомлення про помилки
    } catch (error: any) {
      this.errorMessage = error.message;
      this.result = ''; // Очищуємо результат
    }
  }

  // Загальний метод для обчислень
  calculate() {
    if (this.selectedForm === 'base') {
      this.calculateBaseClass();
    } else if (this.selectedForm === 'child') {
      this.calculateChildClass();
    }
  }
}

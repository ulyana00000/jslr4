import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-dimensional-array',
  templateUrl: './two-dimensional-array.component.html',
  imports: [CommonModule,FormsModule],
  styleUrls: ['./two-dimensional-array.component.css'],
})
export class TwoDimensionalArrayComponent {
  rows: number = 0; // Кількість рядків (n)
  columns: number = 0; // Кількість стовпців (m)
  array: number[][] = []; // Двовимірний масив
  sum: number = 0;
  errorMessage: string = ''; // Повідомлення про помилку

  // Функція для створення масиву
  generateArray() {
    this.errorMessage = ''; // Очищення повідомлення про помилку
    this.sum = 0; // Скидання суми

    if (
      !Number.isInteger(this.rows) || 
      !Number.isInteger(this.columns) || 
      this.rows < 1 || 
      this.rows > 7 || 
      this.columns < 1 || 
      this.columns > 10
    ) {
      this.errorMessage =
        'Помилка: розміри матриці мають бути цілими числами: n (1...7), m (1...10).';
      return;
    }

    // Створення нового масиву
    this.array = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.columns }, () => Math.floor(Math.random() * 100))
    );
  }

  // Функція для обчислення суми елементів з непарними індексами
  calculateSum() {
    if (this.array.length === 0) {
      this.errorMessage = 'Помилка: спочатку створіть матрицю!';
      return;
    }

    this.sum = 0;
    for (let i = 1; i < this.rows; i += 2) {
      // Непарні індекси рядків
      for (let j = 1; j < this.columns; j += 2) {
        // Непарні індекси стовпців
        this.sum += this.array[i][j];
      }
    }
  }
}

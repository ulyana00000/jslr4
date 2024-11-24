import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-one-dimensional-array',
  templateUrl: './one-dimensional-array.component.html',
  imports:[CommonModule,FormsModule],
  styleUrls: ['./one-dimensional-array.component.css']
})
export class OneDimensionalArrayComponent {
  // Масив з п'яти прізвищ
  names: string[] = ['Іваненко', 'Петренко', 'Сидоренко', 'Коваленко', 'Шевченко'];
  filteredNames: string[] = []; // Масив для збереження відфільтрованих прізвищ
  letter: string = ''; // Літер для фільтрації

  // Функція для фільтрації прізвищ за першою буквою
  filterNames() {
    if (this.letter && this.letter.length === 1) {
      this.filteredNames = this.names.filter(name => name.startsWith(this.letter));
    } else {
      this.filteredNames = []; // Якщо введено некоректне значення
    }
  }
}

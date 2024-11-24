import { Routes } from '@angular/router';
import { FieldCalculatorComponent } from './field-calculator/field-calculator.component';
import { TwoDimensionalArrayComponent } from './two-dimensional-array/two-dimensional-array.component';
import { OneDimensionalArrayComponent } from './one-dimensional-array/one-dimensional-array.component';

export const routes: Routes = [
    {path: 'classes' , component: FieldCalculatorComponent},
    {path:'onedim', component: OneDimensionalArrayComponent},
    {path:'twodim', component:TwoDimensionalArrayComponent}
];

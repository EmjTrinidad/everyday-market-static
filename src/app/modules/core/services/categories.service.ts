import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { Category } from '../../../model';

@Injectable({
  providedIn: CoreModule
})
export class CategoriesService {
  loadCategories(): Category[] {
    return [
      { name: 'Rice' },
      { name: 'Noodles' },
      { name: 'Vegetables' },
      { name: 'Fruits' },
      { name: 'Meat' },
      { name: 'Fish' },
      { name: 'Drinks' },
      { name: 'Snacks' }
    ];
  }
}

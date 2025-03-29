import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../../model';
import { CategoryMenuItemComponent } from '../category-menu-item/category-menu-item.component';

@Component({
  standalone: true,
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css'],
  imports: [CommonModule, CategoryMenuItemComponent]
})
export class CategoryMenuComponent {
  @Input() categories!: Category[];
  @Output() categoryChanged = new EventEmitter<Category>();

  onCategorySelected(categoryName: string) {
    const cat = this.categories.find(c => c.name === categoryName);
    this.categoryChanged.emit(cat!);
  }
}

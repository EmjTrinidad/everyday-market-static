import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../../model';
import { CategoriesService } from '../../core/services/categories.service';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';

@Component({
  standalone: true,
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
  imports: [CommonModule, CategoryMenuComponent]
})
export class ProductsPageComponent implements OnInit {
  categories!: Category[];
  selectedCategory!: Category;

  constructor(private readonly categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categories = this.categoriesService.loadCategories();
  }

  onCategoryChanged(category: Category) {
    this.selectedCategory = category;
    alert(category.name);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  provinces: string[] = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
    'Newfoundland and Labrador', 'Nova Scotia', 'Ontario',
    'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Northwest Territories',
    'Nunavut', 'Yukon'
  ];

  selectedCountry: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log("Form submitted successfully!");
    this.router.navigate(['/products']);
  }
}

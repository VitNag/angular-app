import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  formData: FormGroup;
  countries = ['USA', 'Canada', 'Australia'];
  cities: string[] = [];

  constructor() {
    this.formData = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    });

    this.formData.get('city')?.disable();
  }

  updateCities() {
    switch (this.formData.get('country')?.value) {
      case 'USA':
        this.cities = ['New York', 'Los Angeles', 'Chicago'];
        break;
      case 'Canada':
        this.cities = ['Toronto', 'Vancouver', 'Montreal'];
        break;
      case 'Australia':
        this.cities = ['Sydney', 'Melbourne', 'Brisbane'];
        break;
      default:
        this.cities = [];
        break;
    }

    if (this.formData.get('country')?.value) {
      this.formData.get('city')?.enable();
    } else {
      this.formData.get('city')?.disable();
    }
  }

  submitForm() {
    if (this.formData.valid) {
      console.log('Form submitted with data:', this.formData.value);
    } else {
      console.log('Invalid form');
    }
  }
}

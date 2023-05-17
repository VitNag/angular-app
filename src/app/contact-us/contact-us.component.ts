import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  formData = {
    name: '',
    email: '',
    country: '',
    city: ''
  };

  countries = ['USA', 'Canada', 'Australia'];
  cities: string[] = [];

  updateCities() {
    switch (this.formData.country) {
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
  }

  submitForm() {
    console.log(`Form submitted with data: 
    Name: ${this.formData.name}
    Email: ${this.formData.email}
    Country: ${this.formData.country}
    City: ${this.formData.city}
  `);
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarList } from '../car-list';
@Component({
  selector: 'app-car-listings',
  imports: [CommonModule],
  templateUrl: './car-listings.component.html',
  styleUrl: './car-listings.component.scss'
})
export class CarListingsComponent {
  listings: CarList[] = [
    {
      id: 1,
      title: 'Reliable Sedan',
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      
    },
    {
      id: 2,
      title: 'Sporty Coupe',
      make: 'Honda',
      model: 'Civic',
      year: 2018,
      
      
    }
  ];
}


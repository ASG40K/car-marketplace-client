import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarList } from '../car-list';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-car-listings',
  templateUrl: './car-listings.component.html',
  styleUrl: './car-listings.component.scss'
})
export class CarListingsComponent implements OnInit {
  public listings: CarList[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getListings();
  }

  getListings(): void {
    this.http.get<CarList[]>(`${environment.baseUrl}api/carlistings`).subscribe({
      next: result => this.listings = result,
      error: error => console.error('Error loading car listings:', error)
    });
  }
}

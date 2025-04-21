import { Component} from '@angular/core';
import { CountryPopulation } from '../country-population';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-country-population',
  imports: [
    RouterLink
  ],
  templateUrl: './country-population.component.html',
  styleUrl: './country-population.component.scss'
})
export class CountryPopulationComponent {
 public population: CountryPopulation | undefined;
 constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

 ngOnInit() {
   this.getCountryWithPopulation();
 }


      getCountryWithPopulation() {
        let id = this.activatedRoute.snapshot.paramMap.get("id");
         this.http.get<CountryPopulation>(`${environment.baseUrl}api/countries/GetPopulation/${id}`).subscribe({
           next:  result => this.population = result,
           error: error =>  console.error(error)
         }
         
         );
       }
}



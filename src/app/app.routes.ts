import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { CitiesComponent } from './cities/cities.component';
import { CountriesComponent } from './countries/countries.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CountryPopulationComponent } from './country-population/country-population.component';
import { LoginComponent } from './auth/login.component';
import { CarListingsComponent } from './car-listings/car-listings.component';
import { CarListingsFormComponent } from './car-listings-form/car-listings-form.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    { 
        path:"weather",component: WeatherComponent},

    {
        path: "cities", component: CitiesComponent},

    {
        path: "countries", component: CountriesComponent
    },

    {
        path: "navbar", component: NavBarComponent
    },

    {
        path: "CountryPopulation/:id", component: CountryPopulationComponent
    },

    {
        path: "login", component: LoginComponent
    },

    {
        path: "new", component: CarListingsFormComponent
    },

    {
        path: "list", component: CarListingsComponent
    },


    {
        path: "", component: HomeComponent, pathMatch:"full"
    }

    
];

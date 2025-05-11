import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development'; // Adjust path as needed

@Component({
  selector: 'app-car-listings-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './car-listings-form.component.html',
  styleUrl: './car-listings-form.component.scss'
})
export class CarListingsFormComponent {
  carForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.carForm = this.fb.group({
      title: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: [null, Validators.required],
      description: ['', Validators.required],
      userId: [1]
    });
  }

  onSubmit() {
    if (this.carForm.valid) {
      this.http.post(`${environment.baseUrl}api/carlistings`, this.carForm.value).subscribe({
        next: (response) => {
          console.log('Form submitted successfully:', response);
          this.router.navigate(['/car-listings']); // Or wherever your listings view is
        },
        error: (err) => {
          console.error('Submission failed:', err);
        }
      });
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-car-listings-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './car-listings-form.component.html',
  styleUrl: './car-listings-form.component.scss'
})
export class CarListingsFormComponent {
  carForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.carForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: [null, Validators.required],
      userId: [1]
    });
  }

  onSubmit() {
    if (this.carForm.valid) {
      console.log('Form submitted:', this.carForm.value);
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  patientForm: FormGroup;
  
  // 1. Fixed: Added the missing property that the HTML template is using
  isEditMode: boolean = false;
  patientId?: number;

  // 2. Injected ActivatedRoute and Router to manage CRUD / parameters
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.patientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      contact: ['', [Validators.required, Validators.minLength(11)]],
      gender: ['', Validators.required]
    });
  }

  // 3. Fixed: Implemented ngOnInit to handle reading url parameters (e.g., patients/edit/:id)
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.patientId = +idParam;
      
      // Here you will later fetch the existing patient's details from your service:
      // this.patientService.getPatientById(this.patientId).subscribe(patient => this.patientForm.patchValue(patient));
    }
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      console.log('Form Submitted Data:', this.patientForm.value);
      
      if (this.isEditMode) {
        console.log('Updating existing patient ID:', this.patientId);
        // Put update service logic here later...
      } else {
        console.log('Creating a brand new patient record');
        // Put save service logic here later...
      }
      
      // Redirect back to list after operation
      this.router.navigate(['/patients']);
    }
  }
}
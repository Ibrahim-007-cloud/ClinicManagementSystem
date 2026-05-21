import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: any[] = [];

  ngOnInit(): void {
    this.patients = [
      {
        id: 1,
        firstName: 'Ali',
        lastName: 'Khan',
        age: 25,
        gender: 'Male'
      },
      {
        id: 2,
        firstName: 'Sara',
        lastName: 'Ahmed',
        age: 22,
        gender: 'Female'
      }
    ];
  }

  // Fixed: Added the missing onDelete method that your HTML template is calling
  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this patient record?')) {
      // Filters out the deleted patient from the local mock array instantly
      this.patients = this.patients.filter(patient => patient.id !== id);
      console.log(`Successfully deleted patient with ID: ${id}`);
      
      // Later when you integrate your backend API service, it will look like this:
      // this.patientService.deletePatient(id).subscribe(() => this.loadPatients());
    }
  }
}
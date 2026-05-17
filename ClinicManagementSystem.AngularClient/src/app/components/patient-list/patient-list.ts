import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './patient-list.html', /* Ensure this matches your actual HTML file name! */
  styleUrls: ['./patient-list.css']
})
export class PatientList implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getAll().subscribe({
      next: (data: Patient[]) => this.patients = data,
      error: (err: any) => console.error('Error fetching patients', err)
    });
  }

  deletePatient(id: number): void {
    if (confirm('Are you sure you want to delete this patient record?')) {
      this.patientService.delete(id).subscribe({
        next: () => this.loadPatients(),
        error: (err: any) => alert('Error processing delete action.')
      });
    }
  }
}
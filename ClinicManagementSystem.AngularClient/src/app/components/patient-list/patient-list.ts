import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './patient-list.html',
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
      next: (data: Patient[]) => {
        this.patients = data;
      },
      error: (err: any) => {
        console.error('Error fetching patient list:', err);
      }
    });
  }

  deletePatient(id: number | undefined): void {
    if (id === undefined) return;
    
    if (confirm('Are you sure you want to delete this patient profile record?')) {
      this.patientService.delete(id).subscribe({
        next: () => {
          // Refresh the local array state by filtering out the deleted row
          this.patients = this.patients.filter(p => p.id !== id);
        },
        error: (err: any) => {
          console.error('Error deleting patient:', err);
          alert('Could not delete patient record.');
        }
      });
    }
  }
}
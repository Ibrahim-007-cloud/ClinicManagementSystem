import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientService } from '../../services/patient.service';
import { DoctorService } from '../../services/doctor.service';
import { VisitService } from '../../services/visit.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html', // Check your folder: change to './dashboard.html' if it doesn't have '.component'
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  totalPatients: number = 0;
  totalDoctors: number = 0;
  todaysVisitsCount: number = 0;
  isLoading: boolean = true;

  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService,
    private visitService: VisitService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {

    this.patientService.getPatients().subscribe({
      next: (patients) => {
        this.totalPatients = patients.length;
      },
      error: (err) => {
        console.error('Dashboard failed to load patients', err);
      }
    });

    this.doctorService.getDoctors().subscribe({
      next: (doctors) => {
        this.totalDoctors = doctors.length;
      },
      error: (err) => {
        console.error('Dashboard failed to load doctors', err);
      }
    });

    this.visitService.getVisits().subscribe({
      next: (visits) => {
        const todayStr = new Date().toISOString().split('T')[0];
        this.todaysVisitsCount = visits.filter((v: any) => {
          const visitStr = new Date(v.visitDate).toISOString().split('T')[0];
          return visitStr === todayStr;
        }).length;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Dashboard failed to load visits', err);
        this.isLoading = false;
      }
    });
  }
}
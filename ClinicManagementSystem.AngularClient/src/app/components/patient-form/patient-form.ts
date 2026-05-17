import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Required for [(ngModel)] in the HTML
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  patient: Patient = { id: 0, name: '', age: 0, gender: '', contact: '' };
  isEditMode = false;

  constructor(
    private service: PatientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.service.getById(+id).subscribe({
        next: (data) => {
          if(data) this.patient = data;
        },
        error: (err) => {
          console.error('Error fetching patient details:', err);
          this.router.navigate(['/patients']);
        }
      });
    }
  }

  save(): void {
    if (this.isEditMode) {
      this.service.update(this.patient.id, this.patient).subscribe({
        next: () => this.router.navigate(['/patients']),
        error: (err) => {
          console.error(err);
          alert('Error updating patient info');
        }
      });
    } else {
      this.service.create(this.patient).subscribe({
        next: () => this.router.navigate(['/patients']),
        error: (err) => {
          console.error(err);
          alert('Error creating new patient');
        }
      });
    }
  }
}
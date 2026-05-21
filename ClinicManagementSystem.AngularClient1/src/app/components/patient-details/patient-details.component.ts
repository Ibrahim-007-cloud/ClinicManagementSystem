import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-details',
  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  isLoading: boolean = false;

  patient: any = {
    firstName: 'Ali',
    lastName: 'Khan',
    age: 25,
    gender: 'Male'
  };

  ngOnInit(): void {}
}
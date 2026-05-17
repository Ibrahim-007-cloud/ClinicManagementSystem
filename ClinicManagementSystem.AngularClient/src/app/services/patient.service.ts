import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model'; 

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  // ⚠️ IMPORTANT: Change this URL to match your actual backend API URL!
  // If your backend is running locally on a different port, update it here.
  private apiUrl = 'http://localhost:5000/api/patients'; 

  constructor(private http: HttpClient) {}

  // Get all patients (used by PatientList)
  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }

  // Get a single patient by ID (used by PatientForm in Edit mode)
  getById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${id}`);
  }

  // Create a new patient (used by PatientForm)
  create(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  // Update an existing patient (used by PatientForm)
  update(id: number, patient: Patient): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, patient);
  }

  // Delete a patient (used by PatientList)
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
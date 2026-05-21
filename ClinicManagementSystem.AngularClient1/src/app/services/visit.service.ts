import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visit } from '../models/visit.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  private apiUrl = `${environment.apiUrl}/api/visits`; // Dynamically grabs base URL

  constructor(private http: HttpClient) {}

  // GET: Fetch all clinic visits
  getVisits(): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.apiUrl);
  }

  // POST: Schedule a new patient visit
  createVisit(visit: Visit): Observable<Visit> {
    return this.http.post<Visit>(this.apiUrl, visit);
  }

  // PUT: Update the status (Pending -> Completed)
  updateStatus(id: number, status: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/status`, JSON.stringify(status), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
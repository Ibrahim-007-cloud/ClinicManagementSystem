import { Component, OnInit } from '@angular/core';

import {
  CommonModule,
  DatePipe,
  UpperCasePipe
} from '@angular/common';

import { RouterModule } from '@angular/router';

import { VisitService } from '../../services/visit.service';
import { Visit } from '../../models/visit.model';

@Component({
  selector: 'app-visit-history',
  standalone: true,

  imports: [
    CommonModule,
    RouterModule,
    DatePipe,
    UpperCasePipe
  ],

  templateUrl: './visit-history.component.html',
  styleUrls: ['./visit-history.component.css']
})
export class VisitHistoryComponent implements OnInit {

  visits: Visit[] = [];
  filteredVisits: Visit[] = [];
  isLoading: boolean = false;

  constructor(private visitService: VisitService) {}

  ngOnInit(): void {
    this.loadVisits();
  }

  loadVisits(): void {

    this.isLoading = true;

    this.visitService.getVisits().subscribe({

      next: (data: Visit[]) => {

        this.visits = data;
        this.filteredVisits = data;
        this.isLoading = false;

      },

      error: (err: any) => {

        console.error('Failed to load visits', err);
        this.isLoading = false;

      }

    });
  }

  onSearch(event: Event): void {

    const term = (event.target as HTMLInputElement)
      .value
      .toLowerCase();

    this.filteredVisits = this.visits.filter((v: Visit) =>

      v.patientName?.toLowerCase().includes(term) ||

      v.doctorName?.toLowerCase().includes(term) ||

      v.reason?.toLowerCase().includes(term)

    );
  }
}
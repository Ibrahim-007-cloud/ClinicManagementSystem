import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { VisitHistoryComponent } from './components/visit-history/visit-history.component';

export const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent 
  },
  { 
    path: 'patients', 
    component: PatientListComponent 
  },
  { 
    path: 'patients/new', 
    component: PatientFormComponent 
  },
  { 
    path: 'patients/edit/:id', 
    component: PatientFormComponent 
  },
  { 
    path: 'patients/details/:id', 
    component: PatientDetailsComponent 
  },
  { 
    path: 'visit-history', 
    component: VisitHistoryComponent 
  },
  { 
    path: '**', 
    redirectTo: '' 
  } // Fallback catch-all redirecting to home/dashboard
];
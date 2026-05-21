export interface Visit {
  id?: number;
  patientId: number;
  patientName?: string;
  doctorId?: number;
  doctorName?: string;
  visitDate: string;
  reason?: string;
  diagnosis?: string;
  notes?: string;
  status: 'Pending' | 'Completed';
}
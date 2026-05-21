export interface Visit {
  id?: number;
  patientId: number;
  patientName?: string;
  doctorId: number;
  doctorName?: string;
  visitDate: string;
  reason: string;
  diagnosis?: string;
  status?: string; // Add this line right here!
}
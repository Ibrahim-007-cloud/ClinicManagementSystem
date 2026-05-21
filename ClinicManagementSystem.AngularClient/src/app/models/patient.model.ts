export interface Patient {
  id?: number;
  patientName: string; // Must match the backend property name
  age: number;
  gender: string;
  contact: string;
  problem: string;
  doctorName: string;
  visitDate: string | Date;
}
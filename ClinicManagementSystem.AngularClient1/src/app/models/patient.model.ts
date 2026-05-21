export interface Patient {
  id?: number; // Optional because it won't exist yet when creating a new patient
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  contact: string;
  bloodGroup?: string;
  address?: string;
}
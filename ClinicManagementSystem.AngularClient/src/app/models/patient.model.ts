export interface Patient {
  id?: number;          // Optional (?) because new patients don't have a database ID yet
  name: string;         // Maps symmetrically to backend DTO Name
  age: number;          // Maps symmetrically to backend DTO Age
  gender: string;       // Maps symmetrically to backend DTO Gender
  contact: string;      // Maps symmetrically to backend DTO Contact
}
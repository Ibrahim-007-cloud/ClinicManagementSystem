using System;

namespace ClinicManagementSystem.Domain.Entities
{
    public class Visit
    {
        public int Id { get; set; }
        public int PatientId { get; set; }
        public int DoctorId { get; set; }
        public DateTime VisitDate { get; set; }
        public string Reason { get; set; } = string.Empty;
        public string? Diagnosis { get; set; }
        public string? Status { get; set; } // Matches the frontend "Status" we fixed earlier!

        // Navigation property back to the Patient
        public Patient? Patient { get; set; }
    }
}
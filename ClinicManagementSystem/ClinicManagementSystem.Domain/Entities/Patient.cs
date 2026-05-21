using System;

namespace ClinicManagementSystem.Domain.Entities
{
    public class Patient
    {
        // Primary Key for SQLite
        public int Id { get; set; }

        // Mandatory fields required by Option 12 template brief
        public string PatientName { get; set; } = string.Empty;
        public int Age { get; set; }
        public string Gender { get; set; } = string.Empty;
        public string Contact { get; set; } = string.Empty;
        public string Problem { get; set; } = string.Empty;
        public string DoctorName { get; set; } = string.Empty;
        public DateTime VisitDate { get; set; } = DateTime.UtcNow;
    }
}
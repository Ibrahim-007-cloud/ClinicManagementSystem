using System;

namespace ClinicManagementSystem.Application.DTOs
{
    public class VisitResponseDto
    {
        public int Id { get; set; }
        public DateTime VisitDate { get; set; }
        public string Problem { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string Notes { get; set; } = string.Empty;
        
        // Flattened properties for easy UI binding
        public string PatientName { get; set; } = string.Empty;
        public string DoctorName { get; set; } = string.Empty;
    }
}
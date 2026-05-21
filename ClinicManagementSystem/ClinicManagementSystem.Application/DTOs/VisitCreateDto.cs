namespace ClinicManagementSystem.Application.DTOs
{
    public class VisitCreateDto
    {
        public int PatientId { get; set; }
        public System.DateTime VisitDate { get; set; }
        
        // Fixed: Adding string.Empty clears the compiler warning safely
        public string Diagnosis { get; set; } = string.Empty; 
    }
}
using System;

namespace ClinicManagementSystem.Domain.Entities;

public class Prescription
{
    public int Id { get; set; }
    public int VisitId { get; set; }
    public string MedicationName { get; set; } = string.Empty;
    public string Dosage { get; set; } = string.Empty;
    public string Duration { get; set; } = string.Empty; // e.g., "7 Days"

    // Navigation Property
    public Visit? Visit { get; set; }
}
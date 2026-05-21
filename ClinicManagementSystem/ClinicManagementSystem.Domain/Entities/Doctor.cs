using System;
using System.Collections.Generic; // Ensures ICollection and List are explicitly backed up

namespace ClinicManagementSystem.Domain.Entities;

public class Doctor
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Specialization { get; set; } = string.Empty;
    public string ContactNumber { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    
    // Navigation Property
    public ICollection<Visit> Visits { get; set; } = new List<Visit>();
}
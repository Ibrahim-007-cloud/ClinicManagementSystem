using ClinicManagementSystem.Domain.Entities;
public class Patient
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public int Age { get; set; }
    public string Gender { get; set; } = string.Empty;
    public string Contact { get; set; } = string.Empty;
    public string BloodGroup { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;

    // Navigation Property
    // Inside Patient.cs
public ICollection<Visit> Visits { get; set; } = new List<Visit>();
}
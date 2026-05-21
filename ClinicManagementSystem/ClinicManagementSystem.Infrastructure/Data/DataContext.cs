using Microsoft.EntityFrameworkCore;
using ClinicManagementSystem.Domain.Entities;

namespace ClinicManagementSystem.Infrastructure.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        // Maps our Patient domain entity to a SQLite table named 'Patients'
        public DbSet<Patient> Patients { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            // Explicitly enforce any data rules if needed
            modelBuilder.Entity<Patient>().Property(p => p.PatientName).IsRequired();
        }
    }
}
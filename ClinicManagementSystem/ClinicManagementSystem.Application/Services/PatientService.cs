using System.Collections.Generic;
using System.Threading.Tasks;
using ClinicManagementSystem.Application.Interfaces;
using ClinicManagementSystem.Domain.Entities;

namespace ClinicManagementSystem.Application.Services
{
    public class PatientService : IPatientService
    {
        private readonly IPatientRepository _repository;

        public PatientService(IPatientRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Patient>> GetAllPatientsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<Patient?> GetPatientByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task<Patient> CreatePatientAsync(Patient patient)
        {
            await _repository.AddAsync(patient);
            await _repository.SaveChangesAsync();
            return patient;
        }

        public async Task<bool> UpdatePatientAsync(int id, Patient patient)
        {
            var existingPatient = await _repository.GetByIdAsync(id);
            if (existingPatient == null) return false;

            // Map incoming values to database entity fields
            existingPatient.PatientName = patient.PatientName;
            existingPatient.Age = patient.Age;
            existingPatient.Gender = patient.Gender;
            existingPatient.Contact = patient.Contact;
            existingPatient.Problem = patient.Problem;
            existingPatient.DoctorName = patient.DoctorName;
            existingPatient.VisitDate = patient.VisitDate;

            _repository.Update(existingPatient);
            return await _repository.SaveChangesAsync();
        }

        public async Task<bool> DeletePatientAsync(int id)
        {
            var patient = await _repository.GetByIdAsync(id);
            if (patient == null) return false;

            _repository.Delete(patient);
            return await _repository.SaveChangesAsync();
        }
    }
}
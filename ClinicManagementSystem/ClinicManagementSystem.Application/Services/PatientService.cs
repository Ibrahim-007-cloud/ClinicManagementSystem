using System.Collections.Generic;
using System.Threading.Tasks;
using ClinicManagementSystem.Domain.Entities;
using ClinicManagementSystem.Application.Interfaces;

namespace ClinicManagementSystem.Application.Services
{
    public class PatientService : IPatientService
    {
        private readonly IPatientRepository _patientRepository;

        public PatientService(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public async Task<IEnumerable<Patient>> GetAllPatientsAsync()
        {
            return await _patientRepository.GetAllAsync();
        }

        // Fixed: Added '?' to match interface and kept only ONE clean instance
        public async Task<Patient?> GetPatientByIdAsync(int id)
        {
            return await _patientRepository.GetByIdAsync(id);
        }

        public async Task<Patient> CreatePatientAsync(Patient patient)
        {
            return await _patientRepository.CreateAsync(patient);
        }

        public async Task<bool> UpdatePatientAsync(int id, Patient patient)
        {
            return await _patientRepository.UpdateAsync(id, patient);
        }

        // Fixed: Implemented the missing interface member explicitly
        public async Task<bool> DeletePatientAsync(int id)
        {
            return await _patientRepository.DeleteAsync(id);
        }
    }
}
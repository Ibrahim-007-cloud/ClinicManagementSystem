using System.Collections.Generic;
using System.Threading.Tasks;
using ClinicManagementSystem.Application.DTOs;
using ClinicManagementSystem.Domain.Entities;
using ClinicManagementSystem.Application.Interfaces; // This links to your new file!

namespace ClinicManagementSystem.Application.Services
{
    public class VisitService : IVisitService
    {
        private readonly IVisitRepository _visitRepository;

        public VisitService(IVisitRepository visitRepository)
        {
            _visitRepository = visitRepository;
        }

        public async Task<IEnumerable<VisitResponseDto>> GetAllVisitsAsync()
        {
            throw new System.NotImplementedException();
        }

        public async Task<VisitResponseDto> GetVisitByIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<VisitResponseDto> CreateVisitAsync(VisitCreateDto dto)
        {
            throw new System.NotImplementedException();
        }
    }
}
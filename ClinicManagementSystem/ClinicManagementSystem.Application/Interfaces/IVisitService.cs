using System.Collections.Generic;
using System.Threading.Tasks;
using ClinicManagementSystem.Application.DTOs; // Fixes VisitResponseDto error

namespace ClinicManagementSystem.Application.Interfaces
{
    public interface IVisitService
    {
        Task<IEnumerable<VisitResponseDto>> GetAllVisitsAsync();
        Task<VisitResponseDto> GetVisitByIdAsync(int id);
        Task<VisitResponseDto> CreateVisitAsync(VisitCreateDto dto);
    }
}
using System.Collections.Generic;
using System.Threading.Tasks;
using ClinicManagementSystem.Domain.Entities;

namespace ClinicManagementSystem.Application.Interfaces
{
    public interface IVisitRepository
    {
        Task<IEnumerable<Visit>> GetAllAsync();
        Task<Visit?> GetByIdAsync(int id);
        Task<Visit> AddAsync(Visit visit);
    }
}
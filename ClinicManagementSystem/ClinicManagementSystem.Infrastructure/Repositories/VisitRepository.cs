using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ClinicManagementSystem.Application.Interfaces;
using ClinicManagementSystem.Domain.Entities;

namespace ClinicManagementSystem.Infrastructure.Repositories;

public class VisitRepository : IVisitRepository
{
    private readonly ClinicManagementSystem.Infrastructure.Data.DataContext _context;

    public VisitRepository(ClinicManagementSystem.Infrastructure.Data.DataContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Visit>> GetAllVisitsAsync()
    {
        return await _context.Visits
            .Include(v => v.Patient)
            .ToListAsync();
    }

    public async Task<Visit?> GetVisitByIdAsync(int id)
    {
        return await _context.Visits
            .Include(v => v.Patient)
            .FirstOrDefaultAsync(v => v.Id == id);
    }

    public async Task AddVisitAsync(Visit visit)
    {
        await _context.Visits.AddAsync(visit);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateVisitAsync(Visit visit)
    {
        _context.Visits.Update(visit);
        await _context.SaveChangesAsync();
    }
}
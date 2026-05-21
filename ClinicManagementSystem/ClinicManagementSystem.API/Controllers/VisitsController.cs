// Controllers/VisitsController.cs
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectName.Application.DTOS;
using ProjectName.Application.Interfaces;

namespace ProjectName.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VisitsController : ControllerBase
    {
        private readonly IVisitService _visitService;

        public VisitsController(IVisitService visitService)
        {
            _visitService = visitService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var visits = await _visitService.GetAllVisitsAsync();
            return Ok(visits); // HTTP 200
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var visit = await _visitService.GetVisitByIdAsync(id);
            if (visit == null) return NotFound(); // HTTP 404
            
            return Ok(visit);
        }

        [HttpPost]
        public async Task<IActionResult> Create(VisitCreateDto dto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState); // HTTP 400

            var createdVisit = await _visitService.CreateVisitAsync(dto);
            return CreatedAtAction(nameof(GetById), new { id = createdVisit.Id }, createdVisit); // HTTP 201
        }

        [HttpPut("{id}/status")]
        public async Task<IActionResult> UpdateStatus(int id, [FromBody] string status)
        {
            if (status != "Pending" && status != "Completed")
            {
                return BadRequest("Invalid Status value.");
            }

            var result = await _visitService.UpdateStatusAsync(id, status);
            if (!result) return NotFound();

            return NoContent(); // HTTP 204
        }
    }
}
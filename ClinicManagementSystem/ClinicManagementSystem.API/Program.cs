// 1. CLEAN USING STATEMENTS (Removed the broken Microsoft.OpenApi.Models line)
using Microsoft.EntityFrameworkCore;
using ClinicManagementSystem.Infrastructure.Data;
using ClinicManagementSystem.Infrastructure.Repositories;
using ClinicManagementSystem.Application.Interfaces;
using ClinicManagementSystem.Application.Services;

// 2. NOW APPLICATION BUILDING LOGIC CAN START
var builder = WebApplication.CreateBuilder(args);

// 3. REGISTER DATABASE CONTEXT
builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"),
        b => b.MigrationsAssembly("ClinicManagementSystem.Infrastructure")));

// 4. REGISTER DEPENDENCY INJECTION (DI) LAYERS
builder.Services.AddScoped<IPatientRepository, PatientRepository>();
builder.Services.AddScoped<IPatientService, PatientService>();

// 5. BOILERPLATE API SERVICES
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// 6. MIDDLEWARE PIPELINE
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.MapControllers();

app.Run();
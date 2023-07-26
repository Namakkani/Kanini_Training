using CollegePortal.Db;
using CollegePortal.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CollegePortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public DepartmentController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet]

        public async Task<List<Department>> GetAllDepartment()
        {
            var department = await _dbContext.Departments.Select(x => x).ToListAsync();
            return department;
        }
        [HttpGet("{id}")]
        public async Task<Department> GetDepartmentByID(int id)
        {
            var departments= await _dbContext.Departments.Where(x => x.DepartmentID == id).FirstOrDefaultAsync();
            return departments;
        }

        [HttpPost]

        public Task PostDepartmentDetail(Department department)
        {
            var departments = postDepartmentDetails(department);
            _dbContext.Departments.Add(department);
            _dbContext.SaveChanges();

            return Task.CompletedTask;
        }

        private static Department postDepartmentDetails(Department department)
        {
            return new Department()
            {
                DepartmentName = department.DepartmentName

            };
        }
        [HttpPut]
        public Task UpdateDepartmentDetails(Department department)
        {
            var departments = _dbContext.Departments.Where(x => x.DepartmentID == department.DepartmentID).FirstOrDefault();
            departments.DepartmentName = department.DepartmentName;
            _dbContext.Update(departments);
            _dbContext.SaveChanges();

            return Task.CompletedTask;
        }

        [HttpDelete("{id}")]

        public Task DeleteDepartment(int id)
        {
            var departments = _dbContext.Departments.FirstOrDefault(x => x.DepartmentID == id);
            _dbContext.Departments.Remove(departments);
            _dbContext.SaveChanges();

            return Task.CompletedTask;

        }
    }
}

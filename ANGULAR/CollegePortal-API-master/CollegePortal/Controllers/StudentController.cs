using CollegePortal.Db;
using CollegePortal.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CollegePortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public StudentController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet]
        public async Task<List<Student>> GetAllStudent()
        {
            var students = await _dbContext.Students.Select(x => x).ToListAsync();
            return students;
        }

        [HttpGet("{id}")]
        public async Task<Student> GetStudentDetailsByID(int id)
        {
            var students = await _dbContext.Students.Where(x => x.StudentID == id).FirstOrDefaultAsync();
            return students;
        }

        
        [HttpPost]
        public async Task<IActionResult> PostStudentDetail(Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var students = PostStudentDetails(student);
            _dbContext.Students.Add(students);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentDetails(int id)
        {
            var student = await _dbContext.Students.FirstOrDefaultAsync(x => x.StudentID == id);
            if (student == null)
            {
                return NotFound();
            }

            _dbContext.Students.Remove(student);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        


        private static  Student PostStudentDetails(Student student)
        {
            return new Student()
            {
                StudentName = student.StudentName,
                Course = student.Course,
                Specialization = student.Specialization,
                Percentage = student.Percentage,
                DepartmentID = student.DepartmentID,

            };
        }
        [HttpPut]
        public Task UpdateStudentDetail(StudentDto student)
        {
              var students= _dbContext.Students.Where(x => x.StudentID == student.StudentID).FirstOrDefault();
            students.StudentName=student.StudentName;
            students.Course=student.Course;
            students.Specialization=student.Specialization;
            students.Percentage=student.Percentage;
            students.DepartmentID=student.DepartmentID;
            _dbContext.Update(students);
            _dbContext.SaveChanges();

            return Task.CompletedTask;

        }

        
    }
}



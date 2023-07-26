using System.ComponentModel.DataAnnotations;

namespace CollegePortal.Model
{
    public class Student
    {
        [Key]
        public int StudentID { get; set; }
        [Required]
        public string StudentName { get; set; }
        [Required]
        public string Course { get; set; }
        [Required]
        public string Specialization { get; set; }
        [Required]
        public float Percentage { get; set; }

        public virtual int DepartmentID { get; set; }

        public virtual Department Department { get; set; }
    }
}
